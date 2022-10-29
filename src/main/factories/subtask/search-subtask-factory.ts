import { Request, Response } from 'express';
import { SearchSubTaskUseCase } from '~/application/use-cases/subtask';
import { SearchSubTaskController } from '~/infrastructure/controllers/subtask';
import { SubTaskRepository } from '~/infrastructure/repositories/prisma/repo';

export const searchSubtaskFactory = async (request: Request, response: Response) => {
  const subtaskRepository = new SubTaskRepository();
  const searchSubtaskUseCase = new SearchSubTaskUseCase(subtaskRepository);
  const searchSubtaskController = new SearchSubTaskController(searchSubtaskUseCase);
  return await searchSubtaskController.execute({ request, response });
};
