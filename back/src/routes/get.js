const { Router } = require('express');
const { get_characters } = require('../Characters/controllers/charAll');
const routerGet = Router();

routerGet.get('/characters', get_characters);

module.exports = routerGet;