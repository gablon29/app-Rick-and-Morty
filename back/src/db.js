require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_PASSWORD, DB_USER, DB_NAME } = process.env;
const UsersModel = require('./Users/model/Users.js');
const CharactersModel = require('./Characters/model/Chracters.js');
const FavoritesModel = require('./Favorites/model/Favorites.js')

const sequelize = new 
Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}` ,{
    logging: false,
    dialect: 'postgres',
 });

/**
 * La funcion para definir los modelos en la DB se llama con nombres diferentes
 * para que luego se los pueda extraer con los verdaderos nombres
 * y luego convocarlos para la relacion
 */
UsersModel(sequelize);
CharactersModel(sequelize);
FavoritesModel(sequelize);

const { Users, Characters, Favorites } = sequelize.models

// Estableciendo relaciones
Users.belongsToMany(Characters, {
    through: Favorites,
    foreignKey: 'userId',
});
Characters.belongsToMany(Users, {
    through: Favorites,
    foreignKey: 'characterId',
})

module.exports = {
    sequelize, ...sequelize.models
}