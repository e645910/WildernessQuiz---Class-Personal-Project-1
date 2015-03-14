var QuizService = require('../services/quizService');

module.exports.get = function(req, res){
    QuizService.find(req.query)
        .then(function(response){
            if(response.length){
                res.status(200).json(response);
            } else {
                res.status(400).json("Nothing");
            }
        }), function(err){
        }
};