var ImageModel = require('../models/imageModel');
var q = require('q');

module.exports.save = function(image){
	var dfd = q.defer();
	ImageModel(image).save(function(err, res){
		(!err) ? dfd.resolve(res): dfd.reject(err);
	});
	return dfd.promise;
};
module.exports.find = function(req, res){
	ImageModel.exports.find({})
	.then(function(response){
		(response.length) ? res.status(200).json(response): res.status(400).send('image not found');
	},
	function(err){
		res.status(500).json(err);
	})
};