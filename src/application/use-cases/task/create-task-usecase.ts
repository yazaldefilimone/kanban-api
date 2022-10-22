import { ITaskRepository } from '~/application/repositories/task';
import { AlreadyExistsError } from '~/domain/errors';
import { taskStoreType } from '~/domain/task/dtos';
import { Task } from '~/domain/task/entity';
import { ICreateTaskUseCase } from '~/domain/task/use-cases';
import { left, right } from '~/shared/either';

export class CreateTaskUseCase implements ICreateTaskUseCase {
  private readonly taskRepository: ITaskRepository;
  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository;
  }

  async perform(input: ICreateTaskUseCase.Input): ICreateTaskUseCase.Output {
    const building = Task.build(input);
    if (building.isLeft()) {
      return left(building.value);
    }

    const task: taskStoreType = building.value;

    const isExists = await this.taskRepository.getName({ name: task.name });

    if (isExists) {
      return left(new AlreadyExistsError({ param: 'task name' }));
    }

    const taskStore = await this.taskRepository.save(task);

    return right(taskStore);
  }
}
