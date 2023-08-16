require('dotenv').config();

const mongoose = require('mongoose')

const { URL_MONGO_LOCAL, URL_MONGO_ATLAS, MONGODB_URI_VERCEL} = process.env;
 
async function connectMongo() {
    const maxRetries = 5
    const delay = 1000

    for (let i = 0; i < maxRetries; i++){
           try {
       await mongoose.connect(MONGODB_URI_VERCEL, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        autoIndex: true,
        w: 'majority' 
    }) 
        console.log("exito")
        break
    } catch (error) {
        console.log(`error al conectar a MongoDB atlas: ${error}`);
        console.log(`reintento ${i + 1} de ${maxRetries}`);
        console.log(error);
        await new Promise(resolve => setTimeout(resolve, delay))
    } 
    }

}

module.exports = connectMongo;
