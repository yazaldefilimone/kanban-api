import { Request, Response } from 'express';
import { DeleteBoardUseCase } from '~/application/use-cases/board';
import { DeleteBoardController } from '~/infrastructure/controllers/board';
import { BoardRepository } from '~/infrastructure/repositories/board/board-repository';

export const deleteBoardFactory = async (request: Request, response: Response) => {
  const boardRepository = new BoardRepository();
  const deleteBoardUseCase = new DeleteBoardUseCase(boardRepository);
  const deleteBoardController = new DeleteBoardController(deleteBoardUseCase);
  return await deleteBoardController.execute({ request, response });
};
