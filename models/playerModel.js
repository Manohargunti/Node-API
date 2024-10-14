const mongoose = require('mongoose');
const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: {
      type: String, 
      required: true,
    },
    Number: {
      type: Number,
      required: true,
    },
    Position: {
      type: String,
      required: true,
    },
  });

module.exports = mongoose.model('Player', playerSchema)