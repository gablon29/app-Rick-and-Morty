const { ordenDeEliminarFavoritos } = require('../Favorites/controllers/deleteFav');

const routerDelete = require('express').Router();

routerDelete.delete('/:userId/:characterId', ordenDeEliminarFavoritos)

module.exports = routerDelete;