const { Schema, model } = require('mongoose');
const Team = require('./Team');
// > This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const matchSchema = new Schema({
	game_id: {
		type: String,
		required: true,
	},
	teams: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Team',
		},
	],
	winner: {
		type: Schema.Types.ObjectId,
		ref: 'Team',
	},
	loser: {
		type: Schema.Types.ObjectId,
		ref: 'Team',
	},
	date: {
		type: Date,
		required: true,
	},
});

const Match = model('Match', matchSchema);

module.exports = Match;
