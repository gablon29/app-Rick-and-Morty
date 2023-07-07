require('dotenv').config();
const server = require('./server');
require('./db')
const PORT = process.env.PORT;

server.listen(PORT, () => {
console.log(`server listening at ${PORT}`)
}); 

