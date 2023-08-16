const axios = require("axios");
const Favorite = require("../models/Favorite");
const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/';

const getfav = async (req, res) => {

    try {
        const response = await axios.get(URL + 55)
        const {id, name, gender, species, origin, image, status} = response.data;
        res.status(200).json({id, name, gender, species, origin, image, status});

    } catch (error) {
       res.status(505).json({error: error.response.data.error})
     }


    // try {
    //     // const favAll = await Favorite.find()
    //     // console.log(favAll);
    //     return res.status(200).json('hola mundo')
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json(error);
    // }
}
module.exports = getfav