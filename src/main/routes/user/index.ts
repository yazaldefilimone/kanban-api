import { Router } from 'express';
import { signUserFactory } from '~/main/factories/user';
import { searchUserFactory } from '~/main/factories/user/search-user-factory';

const userRoutes = Router();

userRoutes.post('/sign', signUserFactory);
userRoutes.get('/search', searchUserFactory);

export { userRoutes };
