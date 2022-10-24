import { IBoardRepository } from '~/application/repositories/board';
import { InvalidParamError } from '~/domain/errors';
import { IDeleteBoardUseCase } from '~/domain/board/use-cases';
import { left, right } from '~/shared/either';

export class DeleteBoardUseCase implements IDeleteBoardUseCase {
  private readonly boardRepository: IBoardRepository;
  constructor(boardRepository: IBoardRepository) {
    this.boardRepository = boardRepository;
  }

  async perform(input: IDeleteBoardUseCase.Input): IDeleteBoardUseCase.Output {
    if (!input.id) {
      return left(new InvalidParamError({ param: 'boardId' }));
    }

    const result = await this.boardRepository.delete(input);

    return right(result);
  }
}
