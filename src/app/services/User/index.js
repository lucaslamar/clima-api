import UserRepository from '@/app/repositories/UserRepository';

const getAllUsers = (query) => UserRepository.all(query);

export default {
    getAllUsers,
};
