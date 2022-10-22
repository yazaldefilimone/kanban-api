import { NextFunction, Request, Response } from 'express';
import { AuthMiddleware } from '~/infrastructure/controllers/middlewares';
import { TokenValidator } from '~/infrastructure/services/token';

export const authMiddlewareFactory = async (request: Request, response: Response, next: NextFunction) => {
  const tokenValidator = new TokenValidator();
  const authMiddleware = new AuthMiddleware(tokenValidator);
  return await authMiddleware.execute(request, response, next);
};
