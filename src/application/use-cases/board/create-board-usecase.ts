import { IBoardRepository } from '~/application/repositories/board';
import { AlreadyExistsError } from '~/domain/errors';
import { boardStoreType } from '~/domain/board/dtos';
import { Board } from '~/domain/board/entity';
import { ICreateBoardUseCase } from '~/domain/board/use-cases';
import { left, right } from '~/shared/either';

export class CreateBoardUseCase implements ICreateBoardUseCase {
  private readonly boardRepository: IBoardRepository;
  constructor(boardRepository: IBoardRepository) {
    this.boardRepository = boardRepository;
  }

  async perform(input: ICreateBoardUseCase.Input): ICreateBoardUseCase.Output {
    const building = Board.build(input);

    if (building.isLeft()) {
      return left(building.value);
    }

    const board: boardStoreType = building.value;

    const isExists = await this.boardRepository.getName({ name: board.name });

    if (isExists) {
      return left(new AlreadyExistsError({ param: 'board name' }));
    }

    const boardStore = await this.boardRepository.save(board);

    return right(boardStore);
  }
}
