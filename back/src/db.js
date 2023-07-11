require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_PASSWORD, DB_USER, DB_NAME } = process.env;
<<<<<<< HEAD
const Users = require('./Users/model/Users');
const Characters = require('./Characters/model/Chracters');
const Favorites = require('./Favorites/model/favorites');
=======
const UsersModel = require('./Users/model/Users.js');
const CharactersModel = require('./Characters/model/Chracters.js');
const FavoritesModel = require('./Favorites/model/Favorites.js')
>>>>>>> 53396de8b812acc298a76ba623eebaf72b6ccf60

const sequelize = new
 Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}` ,{
    logging: false,
    dialect: 'postgres',
 });

<<<<<<< HEAD
 Users(sequelize);
 Characters(sequelize);
 Favorites(sequelize);
 Users.belongsToMany(Characters, {through: Favorites})
 Characters.belongsToMany(Users, { through: Favorites });
 
 try {
     sequelize.sync({ force: true }).then(() => {
         console.log('database ready')
     })
 } catch (error) {
     console.error('connection failed')
 }
=======
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
>>>>>>> 53396de8b812acc298a76ba623eebaf72b6ccf60

module.exports = {
    sequelize, ...sequelize.models
}