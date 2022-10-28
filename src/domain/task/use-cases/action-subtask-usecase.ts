import { AlreadyExistsError, InvalidParamError } from '~/domain/errors';
import { Either } from '~/shared/either';
import { subTaskStoreType } from '~/domain/task/dtos';

export interface IActionSubTaskUseCase {
  perform: (input: IActionSubTaskUseCase.Input) => IActionSubTaskUseCase.Output;
}

type actionSubTaskUseCaseFailed = InvalidParamError | AlreadyExistsError;

export namespace IActionSubTaskUseCase {
  export type Input = subTaskStoreType;
  export type Output = Promise<Either<actionSubTaskUseCaseFailed, subTaskStoreType>>;
}
