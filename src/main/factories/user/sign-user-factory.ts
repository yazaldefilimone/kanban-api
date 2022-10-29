import { Request, Response } from 'express';
import { SignUserUseCase } from '~/application/use-cases/user';
import { SignUserController } from '~/infrastructure/controllers/user';
import { UserRepository } from '~/infrastructure/repositories/prisma/repo';
import { Cryptography } from '~/infrastructure/services/cryptography';
import { TokenGenerator } from '~/infrastructure/services/token';

export const signUserFactory = async function (request: Request, response: Response) {
  const userRepository = new UserRepository();
  const tokenGenerator = new TokenGenerator();
  const cryptography = new Cryptography();
  const signUserUseCase = new SignUserUseCase(userRepository, tokenGenerator, cryptography);
  const signUserController = new SignUserController(signUserUseCase);
  return await signUserController.execute({ request, response });
};
