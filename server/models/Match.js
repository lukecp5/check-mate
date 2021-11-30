const { Schema, model } = require('mongoose');
const Team = require('./Team');
const matchSchema = new Schema({
	game_id: {
		type: String,
		required: true,
	},
	players: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	winners: [{
		type: Schema.Types.ObjectId,
		ref: 'Player',
	}],
	losers: [{
		type: Schema.Types.ObjectId,
		ref: 'Player',
	}],
	date: {
		type: Date,
		required: true,
	},
});

const Match = model('Match', matchSchema);

module.exports = Match;
