const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  pilot: {
    type: String,
  },
  cast: {
    type: [Object],
  },
})

const Movie = model('movie', movieSchema)

module.exports = Movie