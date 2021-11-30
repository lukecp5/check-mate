const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Book.js
const Match = require('./Match');
const Team = require('./Team');
const Game = require('./Game');

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true
		},
		  lastName: {
			type: String,
			required: true,
			trim: true
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, 'Must use a valid email address'],
		},
		password: {
			type: String,
			required: true,
		},
		matches: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Match',
			},
		],
		teams: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Team',
			},
		],
		games: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Game',
			},
		],
		wins: {
			type: Number,
			default: 0,
		},
		losses: {
			type: Number,
			default: 0,
		},
		avatar: {
			type: String,
			default: 'https://i.imgur.com/X2JhY8J.png',
		},
	},
	// set this to use virtual below
	{
		toJSON: {
			virtuals: true,
		},
	}
);

// hash user password
userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
// userSchema.virtual("bookCount").get(function () {
// 	return this.savedBooks.length;
// });

const User = model('User', userSchema);

module.exports = User;
