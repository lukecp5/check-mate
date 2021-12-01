const { Schema } = require('mongoose');
 
const winSchema = new Schema({
      game: {
            type: String
      },
      wins: {
            type: Number
      }
});

module.exports =  winSchema;