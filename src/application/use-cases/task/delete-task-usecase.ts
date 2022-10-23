import { ITaskRepository } from '~/application/repositories/task';
import { InvalidParamError } from '~/domain/errors';
import { IDeleteTaskUseCase } from '~/domain/task/use-cases';
import { left, right } from '~/shared/either';

export class DeleteTaskUseCase implements IDeleteTaskUseCase {
  private readonly taskRepository: ITaskRepository;
  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository;
  }

  async perform(input: IDeleteTaskUseCase.Input): IDeleteTaskUseCase.Output {
    if (!input.id) {
      return left(new InvalidParamError({ param: 'taskId' }));
    }

    const result = await this.taskRepository.delete(input);

    return right(result);
  }
}
