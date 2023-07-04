require('dotenv').config();
const server = require('./server');
const { sequelize } = require('./db');
const PORT = process.env.PORT;

sequelize.sync({ force: true }).then(
    () => { console.log('DB connect')
        server.listen(PORT, () => {
        console.log(`server listening at ${PORT}`)
    }); 
});
