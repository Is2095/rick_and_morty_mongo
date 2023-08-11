
const { Schema, model } = require("mongoose");

const FavoriteSchema = new Schema({
    id: { type: String },
    name: { type: String, required: true },
    species: { type: String, required: true },
    gender: { type: String, enum: ["Female", "Male", "Genderless", "unknown", "Human"], required: true },
    image: { type: String, required: true },
    user: { type: Array, default: [] },
})

module.exports = model('Favorite', FavoriteSchema)