import { ITaskRepository } from '~/application/repositories';
import { InvalidParamError } from '~/domain/errors';
import { ISearchTaskUseCase } from '~/domain/task/use-cases';
import { left, right } from '~/shared/either';

export class SearchTaskUseCase implements ISearchTaskUseCase {
  private readonly taskRepository: ITaskRepository;
  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository;
  }

  async perform(input: ISearchTaskUseCase.Input): ISearchTaskUseCase.Output {
    const { statusId } = input;

    if (!statusId) {
      return left(new InvalidParamError({ param: 'statusId' }));
    }

    const tasks = await this.taskRepository.getStatus({ statusId });
    return right(tasks);
  }
}
