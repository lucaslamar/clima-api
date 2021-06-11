import CityRepository from '@/app/repositories/CityRepository';
import { BadRequest } from '@/app/config/errors';

class Create {
    async create(city) {
        try {
            return CityRepository.create(city);
        } catch (error) {
            throw new BadRequest(error);
        }
    }
}

export default new Create();
