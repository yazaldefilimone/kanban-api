import { ISubTaskRepository } from '~/application/repositories';
import { InvalidParamError } from '~/domain/errors';
import { ISearchSubTaskUseCase } from '~/domain/task/use-cases';
import { left, right } from '~/shared/either';

export class SearchSubTaskUseCase implements ISearchSubTaskUseCase {
  private readonly subTaskRepository: ISubTaskRepository;
  constructor(subTaskRepository: ISubTaskRepository) {
    this.subTaskRepository = subTaskRepository;
  }

  async perform(input: ISearchSubTaskUseCase.Input): ISearchSubTaskUseCase.Output {
    const { taskId } = input;

    if (!taskId) {
      return left(new InvalidParamError({ param: 'taskId' }));
    }

    const tasks = await this.subTaskRepository.getTaskId({ taskId });

    return right(tasks);
  }
}
