const { ordenDeEliminarFavoritos } = require('../Favorites/controllers/deleteFav');

const routerDelete = require('express').Router();

routerDelete.delete('/characters', ordenDeEliminarFavoritos)

module.exports = routerDelete;