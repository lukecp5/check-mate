const { Schema, model } = require("mongoose");
const User = require("./User");
const Match = require("./Match");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const teamSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	members: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	],
	matches: [
		{
			type: Schema.Types.ObjectId,
			ref: "Match",
		},
	],
});

const Team = model("Team", teamSchema);

module.exports = Team;
