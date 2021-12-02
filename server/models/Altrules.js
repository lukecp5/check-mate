const { Schema, model } = require('mongoose');

const altrulesSchema = new Schema({
    game_id: {
        type: String,
        required: true,
      },
    user: {
        type: String,
        required: true,
      },
    description: {
        type: String,
        required: true,
      },
    rule_set_name: {
        type: String,
        required: true,
    }
})

const Altrules = model('Altrules', altrulesSchema)


module.exports = Altrules;