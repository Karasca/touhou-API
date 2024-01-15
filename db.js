const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('touhouDB', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433
});

module.exports = sequelize;
