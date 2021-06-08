module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Users', {
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
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nickName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            facebook: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            google: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            reddit: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            cpf: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            accountType: {
                type: Sequelize.ENUM,
                values: ['usuario', 'admin', 'vip'],
                allowNull: false,
                defaultValue: 'usuario',
            },
            profilePicture: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            token: {
                type: Sequelize.STRING,
                allowNull: true,
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

    down: (queryInterface) => queryInterface.dropTable('Users'),
};
