var mongoose = require('mongoose');

var schema = mongoose.Schema({
	_id: String,
	question: {type: String, required: true},
	answer: {type: String, required: true},
	badAnswer1: {type: String, required: true},
	badAnswer2: String,
	badAnswer3: String,
	supportData: String,
	img: { data: Buffer, contentType: String }
});

module.exports = mongoose.model('Question', schema);