import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from '~/main/routes/user';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);

export { app };
