var QuestionModel = require('../models/questionModel');
var q = require('q');

module.exports.save = function(question){
	var dfd = q.defer();
	QuestionModel(question).save(function(err, res){
		!err ? dfd.resolve(res): dfd.reject(err);
	});
		return dfd.promise;
};
module.exports.find = function(query){
	var dfd = q.defer();
	QuestionModel.find(query, function(err, res){
		!err ? dfd.resolve(res): dfd.reject(err);
	});
		return dfd.promise;
};