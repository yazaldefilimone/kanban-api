import { IBoardRepository } from '~/application/repositories/board';
import { InvalidParamError } from '~/domain/errors';
import { ISearchBoardUseCase } from '~/domain/board/use-cases';
import { left, right } from '~/shared/either';

export class SearchBoardUseCase implements ISearchBoardUseCase {
  private readonly boardRepository: IBoardRepository;
  constructor(boardRepository: IBoardRepository) {
    this.boardRepository = boardRepository;
  }

  async perform(input: ISearchBoardUseCase.Input): ISearchBoardUseCase.Output {
    const { userId } = input;

    if (!userId) {
      return left(new InvalidParamError({ param: 'userId' }));
    }

    const boards = await this.boardRepository.getUserId({ userId });
    return right(boards);
  }
}
