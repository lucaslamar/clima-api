import Sequelize, { Model } from 'sequelize';

class Cit extends Model {
  static init(sequelize) {
    super.init(
      {
        firstName: Sequelize.STRING,
      },
      { sequelize, timestamps: true, underscored: false }
    );

    return this;
  }
}

export default Cit;
