var mongoose = require('mongoose');

var quizSchema = mongoose.Schema({
	question: {type: String, required: true},
	answer: {type: String, required: true},
	badAnswer1: {type: String, required: true},
	badAnswer2: String,
	badAnswer3: String
});

module.exports = mongoose.model('Quiz', quizSchema);