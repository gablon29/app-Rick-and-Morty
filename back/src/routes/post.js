const routerPost = require('express').Router();
const { $character } = require('../Favorites/controllers/getCharacter');
const { createRecord } = require('../Users/controller/create');

routerPost.post('/characters', $character)

routerPost.post('/users', createRecord)



module.exports = routerPost