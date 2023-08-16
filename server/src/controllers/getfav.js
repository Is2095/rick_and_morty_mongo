const axios = require("axios");
const Favorite = require("../models/Favorite");
const connectMongo  = require('../DB_connection');

const URL = 'https://rickandmortyapi.com/api/character/';

const getfav = async (req, res) => {
    
    try {
        connectMongo()
        const favAll = await Favorite.find()
        return res.status(200).json(favAll)
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = getfav