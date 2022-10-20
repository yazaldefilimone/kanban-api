import { Either } from '~/shared/either';
import { userLoginType, userStoreType } from '~/domain/user/dtos';
import { InvalidParamError, InternalServerError } from '~/domain/errors';
import { AlreadyExistsError } from '~/domain/errors/already-exists-error';

export interface ILoginUserUseCase {
  perform: (input: ILoginUserUseCase.Input) => ILoginUserUseCase.Output;
}

type loginUserUseCaseFailed = InvalidParamError | InternalServerError | AlreadyExistsError;
export namespace ILoginUserUseCase {
  export type Input = userLoginType;
  export type Output = Promise<
    Either<loginUserUseCaseFailed, { user: Omit<userStoreType, 'password'>; token: string }>
  >;
}
