
const Favorite = require('../models/Favorite')

const postFav = async (req, res) => {
    const {name, image, species, gender, id} = req.body;
    try {
        if(!name || !image || !species || !gender || !id) return res.status(401).json({error: 'Faltan datos'}) 
        const favoriteNew = new Favorite({
            id: id,
            name: name, 
            image: image, 
            species: species, 
            gender: gender
        })
        
        await favoriteNew.save()

        const favAll = await Favorite.find()

        return res.status(200).json(favAll)

    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message);
    }
        
    
};

module.exports = postFav;