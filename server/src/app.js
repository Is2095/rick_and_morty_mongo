
const express = require('express');
const server = express();
const router = require('./routes/index')
const cors = require("cors");

//const PORT = 3001;
server.use(cors({
   origin: "*",
   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
   allowedHeaders: ['Content-Type', 'Authorization'],
}))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// server.use((req, res, next) => {
//    // res.header('Access-Control-Allow-Origin', '*');
//    // res.header('Access-Control-Allow-Credentials', 'true');
//    // res.header(
//    //    'Access-Control-Allow-Headers',
//    //    'Origin, X-Requested-With, Content-Type, Accept'
//    //    );
//       // res.header(
//       //    'Access-Control-Allow-Methods',
//       //    'GET, POST, OPTIONS, PUT, DELETE'
//       // );
//       // res.header("X-Total-Count", "1000")


//       next();
//       });    
      
server.use("/rickandmorty", router)

module.exports = server;