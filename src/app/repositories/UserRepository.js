import { Op } from 'sequelize';
import User from '@/databases/models/User';

class UserRepository {
    async all({ page = 1 }) {
        const where = {};
        where[Op.and] = [];

        const query = {
            where,
            order: [['createdAt', 'DESC']],
            distinct: true,
        };

        const limit = 10;
        const { rows: items, count: total } = await User.findAndCountAll(
            this.paginate(query, page, limit)
        );

        return { items, total };
    }

    paginate(query, page, limit) {
        return {
            ...query,
            limit,
            offset: (page - 1) * limit,
        };
    }
}

export default new UserRepository();
