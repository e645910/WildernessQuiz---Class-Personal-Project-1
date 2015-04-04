var mongoose = require('mongoose');

var schema = mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Authenticate' },
	quizInstanceId: Number,
	question: String,
	answer: String,
	isCorrect: Boolean,
	selectedAnswer: String,
	supportData: String,
	gender: String,
	age: String
});

module.exports = mongoose.model('Answers', schema);