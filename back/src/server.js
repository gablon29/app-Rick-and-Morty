const express = require('express');
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

const server = express();
server.use(express.json())
server.use(morgan("dev"))
server.use(cors({
    origin: '*', // permitimos la solicitud de cualquier origen
    methods: 'GET, PUT, HEAD, PATCH, POST, DELETE', // especificamos los metodos permitidos
    preflightContinue: false, // hasta aqui situamos la solicitud proflight
    optionsSuccessStatus: 204, // establecemos el codigo de estado de la respuesta que son exitosas
}))

server.use("/", router)

// error end-point
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err.message);
    res.status(status).send(message);
})

module.exports = server

