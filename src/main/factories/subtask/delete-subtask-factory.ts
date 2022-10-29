import { Request, Response } from 'express';
import { DeleteSubTaskUseCase } from '~/application/use-cases/subtask';
import { DeleteSubTaskController } from '~/infrastructure/controllers/subtask';
import { SubTaskRepository } from '~/infrastructure/repositories/prisma/repo';

export const deleteSubtaskFactory = async (request: Request, response: Response) => {
  const subtaskRepository = new SubTaskRepository();
  const deleteSubtaskUseCase = new DeleteSubTaskUseCase(subtaskRepository);
  const deleteSubtaskController = new DeleteSubTaskController(deleteSubtaskUseCase);
  return await deleteSubtaskController.execute({ request, response });
};
