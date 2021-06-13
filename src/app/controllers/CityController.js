import CityService from '@/app/services/City';

class CityController {
    async index(req, res) {
        const { page = 1 } = req.query;
        const { items, total } = await CityService.getAllCities(req.query);
        return res.json({ items, total, page: parseInt(page, 10) });
    }

    async create(req, res) {
        const city = await CityService.createCity(req.body);
        return res.status(201).json(city);
    }
}

export default new CityController();
