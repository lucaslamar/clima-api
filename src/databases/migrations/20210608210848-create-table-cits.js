'use script'

module.exports = {
  up: (queryInterface, Sequelize) =>
      queryInterface.createTable('cits', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
          },
          firstName: {
              type: Sequelize.STRING,
              allowNull: false,
          },

      }),

  down: (queryInterface) => queryInterface.dropTable('cits'),
};
