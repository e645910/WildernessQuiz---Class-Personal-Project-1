var QuizModel = require('../models/quizModel');
var q = require('q');

module.exports.save = function(quiz){
	var dfd = q.defer();
	QuizModel(quiz).save(function(err, res){
		if(!err) {
			dfd.resolve(res);
		}else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};

module.exports.find = function(query){
	var dfd = q.defer();
	QuizModel.find(query, function(err, results){
		if(!err){
			dfd.resolve(results)
		}else {
			dfd.reject(err)
		}
	});
	return dfd.promise;
};