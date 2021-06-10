import { Op } from 'sequelize';
import City from '@/databases/models/Cit';

class CityRepository {
    async all({ page = 1 }) {
        const where = {};
        where[Op.and] = [];

        const query = {
            where,
            order: [['createdAt', 'DESC']],
            distinct: true,
        };

        const limit = 10;
        const { rows: items, count: total } = await City.findAndCountAll(
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

    async create(cityInfo) {
      const city = await City.create(cityInfo);
      return city;
  }


}

export default new CityRepository();
