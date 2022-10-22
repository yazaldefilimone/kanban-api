import { AlreadyExistsError, InvalidParamError } from '~/domain/errors';
import { Either } from '~/shared/either';
import { taskSaveType } from '~/domain/task/dtos';

export interface ICreateTaskUseCase {
  perform: (input: ICreateTaskUseCase.Input) => ICreateTaskUseCase.Output;
}

type createTaskUseCaseFailed = InvalidParamError | AlreadyExistsError;

export namespace ICreateTaskUseCase {
  export type Input = taskSaveType;
  export type Output = Promise<Either<createTaskUseCaseFailed, { id: string }>>;
}
