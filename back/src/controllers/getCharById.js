const axios = require('axios')
const URL_API = 'https://rickandmortyapi.com/api/character'

const respuesta = (response,res) => {
    const { id, image, name, gender, species } = response.data;
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ id, image, name, gender, species }))
}

const errorCb = (error, res) => {
     (500, { 'Content-Type': 'text/plain' })
            res.end(error.message);
}

/**
 * hacemos la peticion con axios
 * creando a su paralelo una funcion que reciba dos parametros 
 * para que uno sea la referencia a la hora de pedir los valores del objeto data
 * y la otra la referencia para ejecutar los metodos de respuesta de la promesa
 */
const getCharById = (res, id) => {
    axios.get(`${URL_API}/${id}`) 
        .then(response => respuesta(response, res))
        .catch(error => errorCb(error, res))
};
 
module.exports = getCharById;