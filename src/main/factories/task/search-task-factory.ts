import { Request, Response } from 'express';
import { SearchTaskUseCase } from '~/application/use-cases/task';
import { SearchTaskController } from '~/infrastructure/controllers/task';
import { TaskRepository } from '~/infrastructure/repositories/prisma/repo';

export const searchTaskFactory = async (request: Request, response: Response) => {
  const taskRepository = new TaskRepository();
  const searchTaskUseCase = new SearchTaskUseCase(taskRepository);
  const searchTaskController = new SearchTaskController(searchTaskUseCase);
  return await searchTaskController.execute({ request, response });
};
