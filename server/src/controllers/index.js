
const getCharById = require('./getCharById')
const login = require('./login')
// se elimino para implementar BASE DE DATOS
//const { postFav, deleteFav } = require('./handleFavorites')
const postFav = require('./postFav')
const deleteFav = require('./deleteFav')
const postUser = require('./postUser')
const getfav = require("./getfav")

module.exports = { getCharById, login, postUser, postFav, deleteFav, getfav}