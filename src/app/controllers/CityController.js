import CityService from '@/app/services/City';
import { api } from '@/config/api/api';
import { BadRequest } from '@/app/config/errors';


class CityController {
    async index(req, res) {
        const { page = 1 } = req.query;
        const { items, total } = await CityService.getAllCities(req.query);
        return res.json({ items, total, page: parseInt(page, 10) });
    }

    async create(req, res) {
      try {
        const ifCityExists = await api.get(`/data/2.5/weather`, { params: {
          q:  req.body.firstName,
          appid: process.env.APP_ID
        }})

        if (ifCityExists) {
          await CityService.createCity(req.body);
          return res.status(201).json(ifCityExists.data);
       }

      } catch (error) {
        throw new BadRequest(error);
      }
    }
}

export default new CityController();
