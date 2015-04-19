var authModel = require('../models/authModel');
var q = require('q');

module.exports.save = function(authenticate){
	var dfd = q.defer();
	authModel(authenticate).save(function(err, res){
		!err ? dfd.resolve(res): dfd.reject(err);
	});
		return dfd.promise;
};
module.exports.find = function(req, res){
	authModel.find({})
	.then(function(response){
		response.length ? res.status(200).json(response): res.status(404).send('Login email not found');
	}, 
	function(err){
		res.status(500).json(err);
	})
};