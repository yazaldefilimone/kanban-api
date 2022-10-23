import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from '~/main/routes/user';
import taskRoutes from '~/main//routes/task';
import { authMiddlewareFactory } from '~/main/factories/middlewares';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.use('/task', authMiddlewareFactory, taskRoutes);

export { app };
