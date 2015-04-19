var AnswerModel = require('../models/answerModel');
var q = require('q');

module.exports.save = function(answer){
	var dfd = q.defer();
	AnswerModel(answer).save(function(err, res){
		!err ? dfd.resolve(res): dfd.reject(err);
	});
		return dfd.promise;
};
module.exports.find = function(query){
	var dfd = q.defer();
	console.log(444444444, query)
	AnswerModel.find(query, function(err, res){
		!err ? dfd.resolve(res): dfd.reject(err);
	});
	return dfd.promise;
};