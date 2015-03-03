var QuestionModel = require('../models/questionModel');
var q = require('q');

module.exports.find = function(query){
	var dfd = q.defer();
	QuestionModel.findOne(query, function(err, results){
		if(!err){
			dfd.resolve(results)
		}else {
			dfd.reject(err)
		}
	});
	return dfd.promise;
};