import { InvalidParamError, NotFoundError } from '~/domain/errors';
import { Either } from '~/shared/either';

export interface IDeleteBoardUseCase {
  perform: (input: IDeleteBoardUseCase.Input) => IDeleteBoardUseCase.Output;
}

type createBoardUseCaseFailed = InvalidParamError | NotFoundError;

export namespace IDeleteBoardUseCase {
  export type Input = { id: string };
  export type Output = Promise<Either<createBoardUseCaseFailed, void>>;
}
