import { ISubTaskRepository } from '~/application/repositories';
import { InvalidParamError } from '~/domain/errors';
import { IDeleteTaskUseCase } from '~/domain/task/use-cases';
import { left, right } from '~/shared/either';

export class DeleteSubTaskUseCase implements IDeleteTaskUseCase {
  private readonly subtaskRepository: ISubTaskRepository;
  constructor(subtaskRepository: ISubTaskRepository) {
    this.subtaskRepository = subtaskRepository;
  }

  async perform(input: IDeleteTaskUseCase.Input): IDeleteTaskUseCase.Output {
    if (!input.id) {
      return left(new InvalidParamError({ param: 'taskId' }));
    }

    const result = await this.subtaskRepository.delete(input);

    return right(result);
  }
}
