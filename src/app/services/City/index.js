import CityRepository from '@/app/repositories/CityRepository';

import CreateService from './create';


const getAllCities = (query) => CityRepository.all(query);
const createOng = async (body) => CreateService.create(body);


export default {
    getAllCities,
    createOng,
};
