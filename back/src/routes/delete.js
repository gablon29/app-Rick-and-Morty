const routerDelete = require('express').Router();

routerDelete.delete('/characters', (req, res) => {
    console.log('Servidor levantado')
})

module.exports = routerDelete;