//  Add your code here
const { Schema, model } = require('mongoose')

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
  },
  catchPhrase: {
    type: String,
  },
})

const Celebrity = model('celebrity', celebritySchema)

module.exports = Celebrity