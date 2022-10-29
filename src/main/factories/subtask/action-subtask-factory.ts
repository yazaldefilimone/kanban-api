import { Request, Response } from 'express';
import { ActionSubTaskUseCase } from '~/application/use-cases/subtask';
import { ActionSubTaskController } from '~/infrastructure/controllers/subtask';
import { SubTaskRepository } from '~/infrastructure/repositories/prisma/repo';

export const actionSubtaskFactory = async (request: Request, response: Response) => {
  const subtaskRepository = new SubTaskRepository();
  const actionSubtaskUseCase = new ActionSubTaskUseCase(subtaskRepository);
  const actionSubtaskController = new ActionSubTaskController(actionSubtaskUseCase);
  return await actionSubtaskController.execute({ request, response });
};
