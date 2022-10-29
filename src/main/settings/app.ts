import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from '~/main/routes/user';
import taskRoutes from '~/main/routes/task';
import boardRoutes from '~/main/routes/board';
import { authMiddlewareFactory } from '~/main/factories/middlewares';
import subtaskRoutes from '../routes/subtask';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.use('/task', authMiddlewareFactory, taskRoutes);
app.use('/board', authMiddlewareFactory, boardRoutes);
app.use('/subtask', authMiddlewareFactory, subtaskRoutes);

export { app };
