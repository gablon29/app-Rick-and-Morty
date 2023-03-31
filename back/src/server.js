const http = require("http");
const getCharById = require('./controllers/getCharById')
const getCharDetail = require('./controllers/getCharDetail')

const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const { url } = req;

    if (url.includes('onsearch')) {
        const id = url.split('/').at(-1);
        getCharById(res, id)
    }

    if (url.includes('detail')) {
        const id = url.split('/').at(-1);
        getCharDetail(res, id)
    }
}).listen(PORT, 'localhost')

