const { Schema, model } = require('mongoose');
const User = require('./User');
const Team = require('./Team');
const Match = require('./Match');

// > Game Schema
// > - _id: String
// > - name: String
// > - description: String
// > - teams: [Team]
// > - matches: [Match]
// > - maxPlayers: Number
// > - minPlayers: Number
// > - officialURL: String
// > - rulesUrl: String
// > - thumbnail: String

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const gameSchema = new Schema({
	game_id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true,
	},
	matches: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Match',
		},
	],
	description: {
		type: String,
		required: true,
	},
	teams: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Team',
		},
	],
});

const Game = model('Game', gameSchema);

module.exports = Team;
