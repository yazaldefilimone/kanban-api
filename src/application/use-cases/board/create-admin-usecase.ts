import { IBoardRepository } from '~/application/repositories/board';
import { ICreateAdminUseCase } from '~/domain/board/use-cases';
import { AlreadyExistsError, InvalidParamError, UnauthorizedError } from '~/domain/errors';
import { left, right } from '~/shared/either';

class CreateAdminUseCase implements ICreateAdminUseCase {
  private readonly boardRepository: IBoardRepository;
  constructor(boardRepository: IBoardRepository) {
    this.boardRepository = boardRepository;
  }

  async perform(input: ICreateAdminUseCase.Input): ICreateAdminUseCase.Output {
    if (input.admin || input.admin.length < 5) {
      return left(new InvalidParamError({ param: 'admin' }));
    }

    const result = await this.boardRepository.getAdmin({ id: input.userId });

    if (result?.id !== input.boardId) {
      return left(new UnauthorizedError({ param: 'user' }));
    }

    if (result.admin?.includes(input.admin)) {
      return left(new AlreadyExistsError({ param: 'admin' }));
    }

    const data = await this.boardRepository.createAdmin({ admin: input.admin, boardId: input.boardId });

    return right(data);
  }
}
