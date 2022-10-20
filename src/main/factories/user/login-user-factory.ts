import { Request, Response } from 'express';
import { LoginUserUseCase } from '~/application/use-cases/user';
import { LoginUserController } from '~/infrastructure/controllers/user';
import { UserRepository } from '~/infrastructure/repositories/user';
import { Cryptography } from '~/infrastructure/services/cryptography';
import { TokenGenerator } from '~/infrastructure/services/token';

export const loginUserFactory = async function (request: Request, response: Response) {
  const userRepository = new UserRepository();
  const tokenGenerator = new TokenGenerator();
  const cryptography = new Cryptography();
  const loginUserUseCase = new LoginUserUseCase(userRepository, tokenGenerator, cryptography);
  const loginUserController = new LoginUserController(loginUserUseCase);
  return loginUserController.execute({ request, response });
};
