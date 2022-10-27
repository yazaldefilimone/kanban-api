import { Router } from 'express';
import { createBoardFactory, searchBoardFactory } from '~/main/factories/board';

const boardRoutes = Router();

boardRoutes.post('/create', createBoardFactory);
boardRoutes.get('/search', searchBoardFactory);

export default boardRoutes;
