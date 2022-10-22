import { Router } from 'express';
import { loginUserFactory, searchUserFactory, signUserFactory } from '~/main/factories/user';

const userRoutes = Router();

userRoutes.post('/sign', signUserFactory);
userRoutes.post('/login', loginUserFactory);
userRoutes.get('/search', searchUserFactory);

export default userRoutes;
