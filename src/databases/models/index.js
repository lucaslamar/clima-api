/* eslint-disable class-methods-use-this */
import Sequelize from 'sequelize';
import databaseConfig from '@/config/database';
import User from './User';
import Cit from './Cit';


const models = [User, Cit];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
