const { Schema, model } = require("mongoose");

const User = new Schema({
    email: { type: String },
    password: { type: String },
    favorite: { type: Array, default: [] },
})

module.exports = model('User', User)