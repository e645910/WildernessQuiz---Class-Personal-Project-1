var QuestionService = require('../services/questionService');

module.exports.post = function(req, res) {
    QuestionService.save(req.body)
        .then(function(response) {
                res.status(200).json(response);
            },
            function(err) {
                res.status(400).json(err);
            });
};

module.exports.get = function(req, res) {
    QuestionService.find({})
        .then(function(response) {
                if (response.length) {
                    res.status(200).json(response);
                } else {
                    res.status(404).send('nothing to get');
                }
            },
            function(err) {
                res.status(500).json(err);
            });
};

module.exports.put = function(req, res) {
    QuestionService.update(req.body)
        .then(function(response) {
                res.status(200).json(response);
            },
            function(err) {
                res.status(400).json(err);
            });
};

module.exports.delete = function(req, res) {
    var _id = req.query.recordId;
    QuestionService.removeRecord(_id)
        .then(function(response) {
                res.status(200).json(response);
            },
            function(err) {
                res.status(400).json(err);
            });
};