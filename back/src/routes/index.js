const { Router } = require("express");
const routerGet = require("./get");
const routerDelete = require("./delete");
const routerPost = require("./post");
const routerPut = require("./put");
const router = Router();

router.use('/', (req, res, next) => {
    switch (req.method) {
        case 'GET': 
        return routerGet(req, res, next);
        case 'POST':
            return routerPost(req, res, next);
            case 'DELETE':
                return routerDelete(req, res, next);
                case 'PUT': 
                return routerPut(req, res, next);
                default: 
                return res.status(404).send('ruta inaccesible')
    }
})

module.exports = router