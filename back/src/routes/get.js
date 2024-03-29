const { Router } = require('express');
const { get_characters, $addCharactersOnDataBase } = require('../Characters/controllers/charAll');
const { getFavorites } = require('../Favorites/controllers/getCharacter');
const { getCharById } = require('../Characters/controllers/getCharID');
const { paintRecordUsers } = require('../Users/controller/getUsers');
const routerGet = Router();

routerGet.get('/', $addCharactersOnDataBase)
routerGet.get('/characters', get_characters);
routerGet.get('/characters/:id', getCharById)

routerGet.get('/favorites/:id', getFavorites);
routerGet.get('/users', paintRecordUsers);


module.exports = routerGet;