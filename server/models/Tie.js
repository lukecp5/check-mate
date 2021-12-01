const { Schema } = require('mongoose');
 
const tieSchema = new Schema({
      game: {
            type: String
      },
      ties: {
            type: Number
      }
});

module.exports =  tieSchema;