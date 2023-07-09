const routerPut = require('express').Router();

routerPut.put('/users', (req, res) => {
    console.log('servidor levantado');
})

module.exports = routerPut;