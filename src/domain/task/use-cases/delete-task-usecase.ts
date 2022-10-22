import { InvalidParamError, NotFoundError } from '~/domain/errors';
import { Either } from '~/shared/either';

export interface IDeleteTaskUseCase {
  perform: (input: IDeleteTaskUseCase.Input) => IDeleteTaskUseCase.Output;
}

type createTaskUseCaseFailed = InvalidParamError | NotFoundError;

export namespace IDeleteTaskUseCase {
  export type Input = { id: string };
  export type Output = Promise<Either<createTaskUseCaseFailed, void>>;
}
