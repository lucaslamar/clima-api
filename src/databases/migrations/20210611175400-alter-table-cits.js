'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.changeColumn('Cits', 'firstName', {
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
        })
    ])
},

down: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.changeColumn('Cits', 'firstName', {
            type: Sequelize.STRING,
            allowNull: true,
        })
    ])
}
};
