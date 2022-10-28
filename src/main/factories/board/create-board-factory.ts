import { Request, Response } from 'express';
import { CreateBoardUseCase } from '~/application/use-cases/board';
import { CreateBoardController } from '~/infrastructure/controllers/board';
import { BoardRepository } from '~/infrastructure/repositories/prisma/repo';

export const createBoardFactory = async (request: Request, response: Response) => {
  const boardRepository = new BoardRepository();
  const createBoardUseCase = new CreateBoardUseCase(boardRepository);
  const createBoardController = new CreateBoardController(createBoardUseCase);
  return await createBoardController.execute({ request, response });
};
