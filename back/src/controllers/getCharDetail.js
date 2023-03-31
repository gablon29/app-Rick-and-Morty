const axios = require('axios')
const URL_API = 'https://rickandmortyapi.com/api/character'


const successH = (response, res) => {
    const { image, name, gender, status, origin, species } = response.data
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ image, name, gender, status, origin, species }))
}
const errorCb = (error, res) => {
    (500, { 'Content-Type': 'text/plain' })
    res.end(error.message)
}

const getCharDetail = (res, id) => {
    axios.get(`${URL_API}/${id}`)
    .then(response => successH(response, res))
    .catch(error => errorCb(error, res))
}

module.exports = getCharDetail;

// image, name, gender, status, origin y species.