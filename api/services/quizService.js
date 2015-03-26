var QuizModel = require('../models/questionModel');
var q = require('q');

module.exports.find = function(query){
	var dfd = q.defer();
	QuizModel.find(query, function(err, res){
		if(!err){
			dfd.resolve(res);
		}else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};