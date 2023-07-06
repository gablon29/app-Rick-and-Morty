require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_PASSWORD, DB_USER, DB_NAME } = process.env;
const Users = require('./Users/model/Users');
const Characters = require('./Characters/model/Chracters');

const sequelize = new
 Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost/${DB_NAME}`, {
    logging: false,
    dialect: 'postgres',
 });

Users(sequelize);
Characters(sequelize);

try {
    sequelize.sync({ force: true }).then(() => {
        console.log('database ready')
    })
} catch (error) {
    console.error('connection failed')
}


module.exports = {
    sequelize, ...sequelize.models
}