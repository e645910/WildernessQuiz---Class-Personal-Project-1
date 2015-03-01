var ProfileModel = require('../models/profileModel');
var q = require('q');

module.exports.save = function(profile){
	var dfd = q.defer();
	ProfileModel(profile).save(function(err, res){
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
	ProfileModel.find(query, function(err, results){
		if(!err){
			dfd.resolve(results)
		}else {
			dfd.reject(err)
		}
	});
	return dfd.promise;
};