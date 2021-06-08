import { Router } from 'express';

import UserController from '@/app/controllers/UserController';

const routes = new Router();

routes.get('/api/v1/users', UserController.index);

export default routes;
