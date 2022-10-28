import { AlreadyExistsError, InvalidParamError } from '~/domain/errors';
import { Either } from '~/shared/either';
import { subTaskStoreType } from '~/domain/task/dtos';

export interface ISearchSubTaskUseCase {
  perform: (input: ISearchSubTaskUseCase.Input) => ISearchSubTaskUseCase.Output;
}

type createTaskUseCaseFailed = InvalidParamError | AlreadyExistsError;

export namespace ISearchSubTaskUseCase {
  export type Input = {
    taskId: string;
  };
  export type Output = Promise<Either<createTaskUseCaseFailed, subTaskStoreType | subTaskStoreType[]>>;
}
