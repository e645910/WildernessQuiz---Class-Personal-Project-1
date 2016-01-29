var QuizService = require('../services/quizService');

module.exports.get = function(req, res) {
    QuizService.find({})
        .then(function(response) {
                if (response.length) {
                    res.status(200).json(response);
                } else {
                    res.status(400).json('nothing to get');
                }
            },
            function(err) {
                res.status(500).json(err);
            });
};