import { Either } from '~/shared/either';
import { userStoreType } from '~/domain/user/dtos';
import { InvalidParamError, InternalServerError } from '~/domain/errors';
import { AlreadyExistsError } from '~/domain/errors/already-exists-error';

export interface ISearchUserUseCase {
  perform: (input: ISearchUserUseCase.Input) => ISearchUserUseCase.Output;
}

type signUserUseCaseFailed = InvalidParamError | InternalServerError | AlreadyExistsError;
export namespace ISearchUserUseCase {
  export type Input = {
    email?: string;
    id?: string;
  };
  export type Output = Promise<
    Either<signUserUseCaseFailed, Omit<userStoreType, 'password'> | Omit<userStoreType, 'password'>[]>
  >;
}
