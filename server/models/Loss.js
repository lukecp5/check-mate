const { Schema } = require('mongoose');
 
const lossSchema = new Schema({
      game: {
            type: String
      },
      losses: {
            type: Number
      },
});

module.exports =  lossSchema;