
const Favorite = require('../../src/models/Favorite')
const connectMongo  = require('../DB_connection');

const deleteFav = async (req, res) => {

    const {id} = req.params;
     try {
      connectMongo()
      await Favorite.findOneAndDelete({id})
      const favoritesRestantes = await Favorite.find()
      res.status(200).json(favoritesRestantes)
     } catch (error) {
        res.status(500).json(error.message)
     }   
}

module.exports = deleteFav;