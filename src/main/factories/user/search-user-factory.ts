import { Request, Response } from 'express';
import { SearchUserUseCase } from '~/application/use-cases/user';
import { SearchUserController } from '~/infrastructure/controllers/user';
import { UserRepository } from '~/infrastructure/repositories/user';

export const searchUserFactory = async function (request: Request, response: Response) {
  const userRepository = new UserRepository();
  const searchUserUseCase = new SearchUserUseCase(userRepository);
  const searchUserController = new SearchUserController(searchUserUseCase);
  return await searchUserController.execute({ request, response });
};
