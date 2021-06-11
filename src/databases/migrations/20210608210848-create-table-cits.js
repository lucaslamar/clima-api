'use script'

module.exports = {
  up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Cits', {
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
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },

      }),

  down: (queryInterface) => queryInterface.dropTable('Cits'),
};
