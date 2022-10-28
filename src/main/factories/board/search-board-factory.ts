import { Request, Response } from 'express';
import { SearchBoardUseCase } from '~/application/use-cases/board';
import { SearchBoardController } from '~/infrastructure/controllers/board';
import { BoardRepository } from '~/infrastructure/repositories/prisma/repo';

export const searchBoardFactory = async (request: Request, response: Response) => {
  const boardRepository = new BoardRepository();
  const searchBoardUseCase = new SearchBoardUseCase(boardRepository);
  const searchBoardController = new SearchBoardController(searchBoardUseCase);
  return await searchBoardController.execute({ request, response });
};
