
const server = require('./src/app')

require('dotenv').config()
const connectMongo  = require('./src/DB_connection');
const {PORT} = process.env || 3001

server.listen(PORT, () => {
    connectMongo()
    console.log(`server in port -> ${PORT}`);
})

