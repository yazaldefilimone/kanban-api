import { AlreadyExistsError, InvalidParamError } from '~/domain/errors';
import { Either } from '~/shared/either';
import { boardStoreType } from '~/domain/board/dtos';

export interface ISearchBoardUseCase {
  perform: (input: ISearchBoardUseCase.Input) => ISearchBoardUseCase.Output;
}

type createBoardUseCaseFailed = InvalidParamError | AlreadyExistsError;

export namespace ISearchBoardUseCase {
  export type Input = {
    userId: string;
  };
  export type Output = Promise<Either<createBoardUseCaseFailed, boardStoreType[]>>;
}
