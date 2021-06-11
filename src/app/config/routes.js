import { Router } from 'express';

import NewCity from '@/app/utils/validators/City/new';

import CityController from '@/app/controllers/CityController';

const routes = new Router();


routes.get('/api/v1/city', CityController.index);
routes.post('/api/v1/city', [NewCity], CityController.create);

export default routes;
