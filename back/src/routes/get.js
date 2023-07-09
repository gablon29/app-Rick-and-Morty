const { Router } = require('express');
const { get_characters } = require('../Characters/controllers/charAll');
const { $character, getFavorites } = require('../Favorites/controllers/getCharacter');
const routerGet = Router();

routerGet.get('/characters', get_characters);

routerGet.get('/favorites/:id', getFavorites);


module.exports = routerGet;