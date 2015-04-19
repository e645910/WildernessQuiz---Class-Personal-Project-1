var ImageService = require('../services/imageService');

module.exports.post = function(req, res){
	ImageService.save(req.body)
	.then
};