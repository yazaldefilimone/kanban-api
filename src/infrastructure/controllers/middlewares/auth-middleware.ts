import { NextFunction, Request, Response } from 'express';
import { ITokenValidator } from '~/application/services/token';

export class AuthMiddleware {
  private readonly tokenValidator: ITokenValidator;
  constructor(tokenValidator: ITokenValidator) {
    this.tokenValidator = tokenValidator;
  }

  async execute(request: Request, response: Response, next: NextFunction): Promise<any> {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return response.status(401).json({ message: 'No token provided' });
    }

    const parts = authHeader.split(' ');

    if (!(parts.length === 2)) {
      return response.status(401).json({ message: 'Token properties error' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/.test(scheme)) {
      return response.status(401).json({ message: 'Token invalid' });
    }

    const validation = await this.tokenValidator.validate({ token });

    if (!validation.status) {
      return response.status(401).json({ message: 'Token invalid' });
    }

    request.userId = validation.data.id as string;

    return next();
  }
}
