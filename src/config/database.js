require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
};
