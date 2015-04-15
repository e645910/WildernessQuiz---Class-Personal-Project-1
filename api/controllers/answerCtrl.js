var AnswerService = require('../services/answerService')

module.exports.post = function(req, res){
    AnswerService.save(req.body)
    .then(function(response){
        res.status(200).json(response);
    }, 
    function(err){
        res.status(400).json(err);
    })
};
module.exports.get = function(req, res){
	AnswerService.find({})//({quizInstanceId: req.query.quizInstanceId, userId: req.query.userId})
	.then(function(response){
		console.log(333333333, req.query.quizInstanceId)
		if(response){
			console.log(22222222, response)
			res.status(200).json(response);
		}else {
			res.status(404).send('nothing to get');
		}
	},
	function(err){
		res.status(500).json(err);
	});
};