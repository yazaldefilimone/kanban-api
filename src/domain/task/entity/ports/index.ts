import { InvalidParamError } from '~/domain/errors';
import { Either } from '~/shared/either';
import { taskStoreType } from '~/domain/task/dtos';

export type taskBuildFailed = InvalidParamError;
export type taskBuildSuccess = taskStoreType;
export type taskBuildResponse = Either<taskBuildFailed, taskBuildSuccess>;
