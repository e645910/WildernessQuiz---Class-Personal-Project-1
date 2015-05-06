var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
	question: {type: String, required: true},
	answer: {type: String, required: true},
	badAnswer1: {type: String, required: true},
	badAnswer2: String,
	badAnswer3: String,
	supportData: String,
	image: String
});

module.exports = mongoose.model('Question', questionSchema);