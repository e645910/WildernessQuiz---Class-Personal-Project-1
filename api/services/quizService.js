var QuizModel = require('../models/questionModel');
var q = require('q');

module.exports.find = function(query){
	var dfd = q.defer();
	QuizModel.find(query, function(err, res){
		!err ? dfd.resolve(res): dfd.reject(err);
	});
	return dfd.promise;
};