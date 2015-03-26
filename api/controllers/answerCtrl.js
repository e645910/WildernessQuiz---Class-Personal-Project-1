var AnswerService = require('../services/answerService')

module.exports.post = function(req, res){
    AnswerService.save(req.body)
    .then(function(response){
    	console.log(23232323, response)
        res.status(200).json(response);
    }, 
    function(err){
        res.status(400).json(err);
    })
};
module.exports.get = function(req, res){
	AnswerService.find({})
	.then(function(response){
		if(response.length){
			res.status(200).json(response);
		}else {
			res.status(404).send('nothing to get');
		}
	},
	function(err){
		res.status(500).json(err);
	});
};