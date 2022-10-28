import { ISubTaskRepository } from '~/application/repositories';
import { AlreadyExistsError } from '~/domain/errors';
import { IActionSubTaskUseCase } from '~/domain/task/use-cases';
import { left, right } from '~/shared/either';

export class ActionSubTaskUseCase implements IActionSubTaskUseCase {
  private readonly subTaskRepository: ISubTaskRepository;
  constructor(subTaskRepository: ISubTaskRepository) {
    this.subTaskRepository = subTaskRepository;
  }

  async perform(input: IActionSubTaskUseCase.Input): IActionSubTaskUseCase.Output {
    if (input.id) {
      const subtask = await this.subTaskRepository.update(input);
      return right(subtask);
    }

    const isExists = await this.subTaskRepository.getName({ name: input.name });

    if (isExists) {
      return left(new AlreadyExistsError({ param: 'task name' }));
    }

    const subtaskStore = await this.subTaskRepository.save(input);
    return right(subtaskStore);
  }
}
