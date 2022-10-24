import { randomUUID } from 'node:crypto';
import { InvalidParamError } from '~/domain/errors';
import { boardStoreType, boardType } from '~/domain/board/dtos';
import { Either, left, right } from '~/shared/either';
import { isValidName } from '~/shared/validators';
import { boardBuildResponse } from './ports';

export class Board {
  public board: boardStoreType;
  private constructor(board: boardType) {
    this.board = {
      id: randomUUID(),
      ...board,
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    };
  }
  public static isValidName(name: string): Either<InvalidParamError, string> {
    return isValidName(name) ? right(name) : left(new InvalidParamError({ param: 'name' }));
  }

  public static build(board: boardType): boardBuildResponse {
    const boardValidate = {
      name: this.isValidName(board.name),
    };

    if (boardValidate.name.isLeft()) {
      return left(boardValidate.name.value);
    }

    if (board.admin?.length < 1) {
      return left(new InvalidParamError({ param: 'admin' }));
    }

    const boardValid: boardType = {
      name: boardValidate.name.value,
      admin: board.admin,
    };

    const metadata = new Board(boardValid);

    return right(metadata.board);
  }
}
