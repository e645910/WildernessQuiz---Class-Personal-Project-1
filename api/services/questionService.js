var QuestionModel = require('../models/questionModel');
var q = require('q');

module.exports.save = function(question){
	var dfd = q.defer();
	QuestionModel(question).save(function(err, res){
		(!err) ? dfd.resolve(res): dfd.reject(err);
	});
	return dfd.promise;
};

module.exports.find = function(query){
	var dfd = q.defer();
	QuestionModel.find(query, function(err, res){
		(!err) ? dfd.resolve(res): dfd.reject(err);
	});
	return dfd.promise;
};

module.exports.update = function(update){
	console.log(222222222, "test")
	var dfd = q.defer();
	var query = {_id: update._id};
	var update = {
		question: update.question,
		answer: update.answer,
		badAnswer1: update.badAnswer1,
		badAnswer2: update.badAnswer2,
		badAnswer3: update.badAnswer3,
		supportData: update.supportData,
		image: update.image
	};
	QuestionModel.findOneAndUpdate(query, update, function(err, res){
    	(!err) ? dfd.resolve(res): dfd.reject(err);
	});
	return dfd.promise;
};