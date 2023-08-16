require('dotenv').config();

const mongoose = require('mongoose')

const { URL_MONGO_LOCAL, URL_MONGO_ATLAS, MONGODB_URI_VERCEL} = process.env;
 
async function connectMongo() {
           try {
       await mongoose.connect(MONGODB_URI_VERCEL, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        autoIndex: true,
        w: 'majority' 
    }) 
        console.log("exito")
    } catch (error) {
        console.log(error);
    } 
}

module.exports = connectMongo;
