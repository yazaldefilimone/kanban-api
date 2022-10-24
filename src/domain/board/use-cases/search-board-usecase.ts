import { AlreadyExistsError, InvalidParamError } from '~/domain/errors';
import { Either } from '~/shared/either';
import { boardStoreType } from '~/domain/board/dtos';

export interface ISearchTaskUseCase {
  perform: (input: ISearchTaskUseCase.Input) => ISearchTaskUseCase.Output;
}

type createTaskUseCaseFailed = InvalidParamError | AlreadyExistsError;

export namespace ISearchTaskUseCase {
  export type Input = {
    userId: string;
  };
  export type Output = Promise<Either<createTaskUseCaseFailed, boardStoreType[]>>;
}
