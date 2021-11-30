const { Schema, model } = require('mongoose');
const Team = require('./Team');
// > This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
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
