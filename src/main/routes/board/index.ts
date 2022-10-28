import { Router } from 'express';
import { createBoardFactory, searchBoardFactory } from '~/main/factories/board';

const boardRoutes = Router();

boardRoutes.post('/create', createBoardFactory);
boardRoutes.get('/search', searchBoardFactory);
boardRoutes.delete('/delete', searchBoardFactory);

export default boardRoutes;
