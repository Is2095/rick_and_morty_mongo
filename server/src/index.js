
const server = require('./app')

require('dotenv').config()
const router = require('./routes/index');
const connectMongo  = require('./DB_connection');
const {PORT} = process.env || 3001

server.listen(PORT, () => {
    connectMongo()
    console.log(`server in port -> ${PORT}`);
})

