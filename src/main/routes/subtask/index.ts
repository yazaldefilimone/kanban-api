import { Router } from 'express';
import { actionSubtaskFactory, deleteSubtaskFactory, searchSubtaskFactory } from '~/main/factories/subtask';

const subtaskRoutes = Router();

subtaskRoutes.post('/', actionSubtaskFactory);
subtaskRoutes.delete('/', deleteSubtaskFactory);
subtaskRoutes.get('/', searchSubtaskFactory);

export default subtaskRoutes;
