import { Router } from 'express';
import { createBoardFactory } from '~/main/factories/board';

const boardRoutes = Router();

boardRoutes.post('/create', createBoardFactory);

export default boardRoutes;
