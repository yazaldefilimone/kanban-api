import { InvalidParamError } from '~/domain/errors';
import { Either } from '~/shared/either';
import { boardStoreType } from '~/domain/board/dtos';

export type boardBuildFailed = InvalidParamError;
export type boardBuildSuccess = boardStoreType;
export type boardBuildResponse = Either<boardBuildFailed, boardBuildSuccess>;
