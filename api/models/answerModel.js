var mongoose = require('mongoose');

var schema = mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Authenticate' },
	quizInstanceId: Number,
	question: String,
	answer: String,
	isCorrect: String,
	selectedAnswer: String,
	supportData: String
});

module.exports = mongoose.model('Answers', schema);