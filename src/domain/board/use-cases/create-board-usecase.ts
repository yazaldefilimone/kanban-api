import { AlreadyExistsError, InvalidParamError } from '~/domain/errors';
import { Either } from '~/shared/either';
import { boardSaveType } from '~/domain/board/dtos';

export interface ICreateBoardUseCase {
  perform: (input: ICreateBoardUseCase.Input) => ICreateBoardUseCase.Output;
}

type createBoardUseCaseFailed = InvalidParamError | AlreadyExistsError;

export namespace ICreateBoardUseCase {
  export type Input = boardSaveType;
  export type Output = Promise<Either<createBoardUseCaseFailed, { id: string }>>;
}
