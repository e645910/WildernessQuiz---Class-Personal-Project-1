var mongoose = require('mongoose');

var ProfileSchema = mongoose.Schema({
	gender: String,
	age: String
});

module.exports = mongoose.model('Profile', ProfileSchema);