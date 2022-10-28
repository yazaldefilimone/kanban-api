import { AlreadyExistsError, InvalidParamError } from '~/domain/errors';
import { Either } from '~/shared/either';

export interface ICreateAdminUseCase {
  perform: (input: ICreateAdminUseCase.Input) => ICreateAdminUseCase.Output;
}

type createBoardUseCaseFailed = InvalidParamError | AlreadyExistsError;

export namespace ICreateAdminUseCase {
  export type Input = { admin: string; userId: string; boardId: string };
  export type Output = Promise<Either<createBoardUseCaseFailed, void>>;
}
