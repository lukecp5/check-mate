const { Schema, model } = require("mongoose");
const User = require("./User");
const Team = require("./Team");
const Match = require("./Match");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const gameSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	matches: [
		{
			type: Schema.Types.ObjectId,
			ref: "Match",
		},
	],
	description: {
		type: String,
		required: true,
	},
	teams: [
		{
			type: Schema.Types.ObjectId,
			ref: "Team",
		},
	],
});

const Game = model("Game", gameSchema);

module.exports = Team;
