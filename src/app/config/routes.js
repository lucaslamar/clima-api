import { Router } from 'express';

import CityController from '@/app/controllers/CityController';

const routes = new Router();


routes.get('/api/v1/city', CityController.index);
routes.post('/api/v1/city', CityController.create);

export default routes;
