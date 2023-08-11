
const express = require('express')
const {getCharById, login, postUser, postFav, deleteFav} = require('../controllers/index')

//const getCharByIdHundlers = require('../hundlers/getCharByIdHundlers')


const router = express.Router()

router.get('/character/:id', getCharById)
router.get("/login", login)
router.post("/login", postUser)
router.post('/fav', postFav)
router.delete('/fav/:id',deleteFav)

module.exports = router;