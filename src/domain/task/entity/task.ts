import { randomUUID } from 'node:crypto';
import { InvalidParamError } from '~/domain/errors';
import { taskStoreType, taskType } from '~/domain/task/dtos';
import { Either, left, right } from '~/shared/either';
import { isValidDescription, isValidName } from '~/shared/validators';
import { taskBuildResponse } from './ports';

export class Task {
  public task: taskStoreType;
  private constructor(task: taskType) {
    this.task = {
      id: randomUUID(),
      ...task,
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    };
  }

  public static isValidDescription(description: string): Either<InvalidParamError, string> {
    return isValidDescription(description) ? right(description) : left(new InvalidParamError({ param: 'description' }));
  }

  public static isValidName(name: string): Either<InvalidParamError, string> {
    return isValidName(name) ? right(name) : left(new InvalidParamError({ param: 'name' }));
  }

  public static build(task: taskType): taskBuildResponse {
    const taskValidate = {
      description: this.isValidDescription(task.description),
      name: this.isValidName(task.name),
    };

    if (taskValidate.description.isLeft()) {
      return left(taskValidate.description.value);
    }

    if (taskValidate.name.isLeft()) {
      return left(taskValidate.name.value);
    }

    if (!task.boardId) {
      return left(new InvalidParamError({ param: 'boardId' }));
    }

    if (!task.userId) {
      return left(new InvalidParamError({ param: 'userId' }));
    }

    const taskValid: taskType = {
      description: taskValidate.description.value,
      name: taskValidate.name.value,
      statusId: task.statusId,
      userId: task.userId,
      boardId: task.boardId,
    };

    const metadata = new Task(taskValid);

    return right(metadata.task);
  }
}
