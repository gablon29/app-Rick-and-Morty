require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_HOSTNAME, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new
 Sequelize( DB_HOSTNAME, DB_USER, DB_PASSWORD, {
    logging: false,
    dialect: 'mysql',
 });

try {
    sequelize.authenticate();
    console.log('database connection')
} catch (error) {
    console.error('error al conectar')
}


module.exports = {
    sequelize, ...sequelize.models
}