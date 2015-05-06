var ImageService = require('../services/imageService');

module.exports.post = function(req, res){
	ImageService.save(req.body)
	.then(function(response){
		response.length ? res.status(200).json(response): res.status(400).json(err);
	})
};
module.exports.get = function(req, res){
	ImageService.findById({})
	.then(function(response){
		(response.length) ? req.status(200).json(response): res.status(400).json(err);
	},
	function(err){
		res.status(500).json(err);
	});
};