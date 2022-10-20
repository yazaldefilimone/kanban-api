import { Router } from 'express';
import { loginUserFactory, signUserFactory, searchUserFactory } from '~/main/factories/user';

const userRoutes = Router();

userRoutes.post('/sign', signUserFactory);
userRoutes.post('/login', loginUserFactory);
userRoutes.get('/search', searchUserFactory);

export { userRoutes };
