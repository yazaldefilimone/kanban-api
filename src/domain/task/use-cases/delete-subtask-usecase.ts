import { InvalidParamError, NotFoundError } from '~/domain/errors';
import { Either } from '~/shared/either';

export interface IDeleteSubTaskUseCase {
  perform: (input: IDeleteSubTaskUseCase.Input) => IDeleteSubTaskUseCase.Output;
}

type deleteSubTaskUseCaseFailed = InvalidParamError | NotFoundError;

export namespace IDeleteSubTaskUseCase {
  export type Input = { id: string };
  export type Output = Promise<Either<deleteSubTaskUseCaseFailed, void>>;
}
