require('dotenv').config();
const server = require('./server');
const { sequelize } = require('./db');
const { $addCharactersOnDataBase } = require('./Characters/controllers/charAll');
require('./db')
const PORT = process.env.PORT;

sequelize.sync({ alter: true }).then(() => {
    console.log('database Ready')
    server.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
    }); 
});


