var mongoose = require('mongoose');

var ProfileSchema = mongoose.Schema({
	fullName: {type: String, required: true},
	email: { type: String, required: true, unique: true },
	password: String,
	gender: String,
	age: Number,
	bio: String
});

module.exports = mongoose.model('Profile', ProfileSchema);