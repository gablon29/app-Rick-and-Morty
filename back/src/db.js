require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_PASSWORD, DB_USER, DB_NAME } = process.env;
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost/${DB_NAME}`);
