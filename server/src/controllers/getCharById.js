const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/';
const Favorite = require("../models/Favorite");

// ********************** CON ASYNC-AWAIT *********************

const getCharById = async (req, res) => {
   const ids = req.params.id;
    try {
        const response = await axios.get(URL + ids)
        const {id, name, gender, species, origin, image, status} = response.data;
        res.status(200).json({id, name, gender, species, origin, image, status});

    } catch (error) {
       res.status(505).json({error: error.response.data.error})
     }

}

module.exports = getCharById;



// ****************** SIN ASYNC/AWAIT *********************
// const getCharById = (req, res) => {
//     const {id} = req.params;
//     axios
//         .get(URL + id)
//         .then ((response)=>{          
//             try {
//                  const {id, name, gender, species, origin, image, status} = response.data;
//                  return res.json({id, name, gender, species, origin, image, status});
//                 } catch (error) {
//                  return res.status(404).send(`Character: ${id} Not fount`)
//             }          
//         })
//         .catch((reason)=>{
//         return res.status(500).json({message: reason.message})
//         })
       
// };

// ***************************** CON ASYNC/AWAIT *****************








// ***************************** sin EXPRESS *********************************************
// const axios = require('axios')

// const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById = (res, id) => {

//     axios
//     .get(URL + id)
//     .then ((response)=>{
//         const {id, name, gender, species, origin, image, status} = response.data
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         return res.end(JSON.stringify({id, name, gender, species, origin, image, status}))
//     })
//     .catch((error)=> {
//         res.writeHead(500, {'Content-Type': 'text/plain'})
//         return res.end(error.message)
//     })

// }

// module.exports = getCharById;