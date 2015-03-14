var QuestionService = require('../services/questionService');

module.exports.post = function(req, res){
	QuestionService.save(req.body)
		.then(function(response){
			res.status(200).json(response);
		}), function(err){
			res.status(400).json(err);
		}
};
module.exports.get = function(req, res){
	QuestionService.find({})
	.then(function(response){
		if(response.length){
			res.status(200).json(response);
		}else {
			res.status(404).send('nothing returned');
		}
	}), function(err){
		res.status(500).json(err);
	}
};