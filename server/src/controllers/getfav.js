const axios = require("axios");
const Favorite = require("../models/Favorite");

const getfav = async (req, res) => {
    try {
        const favAll = await Favorite.find()
        console.log(favAll);
        return res.status(200).json(favAll)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
module.exports = getfav