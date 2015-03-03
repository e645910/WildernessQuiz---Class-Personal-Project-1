var QuestionService = require('../services/quizService');

module.exports.get =function(req, res){
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