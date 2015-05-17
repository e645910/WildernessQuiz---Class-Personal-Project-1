var QuestionService = require('../services/questionService');

module.exports.post = function(req, res){
	QuestionService.save(req.body)
	.then(function(response){
		res.status(200).json(response);
	}, 
	function(err){
		res.status(400).json(err);
	})
};

module.exports.get = function(req, res){
	QuestionService.find({})
	.then(function(response){
		(response.length) ? res.status(200).json(response): res.status(404).send('nothing to get');
	}, 
	function(err){
		res.status(500).json(err);
	});
};

module.exports.put = function(req, res){
	QuestionService.update(req.body)
	.then(function(response){
		res.status(200).json(response);
	}, function(err){
		res.status(400).json(err)
	})
};