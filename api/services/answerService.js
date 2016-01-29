var AnswerModel = require('../models/answerModel');
var q = require('q');

module.exports.save = function(answer) {
    var dfd = q.defer();
    AnswerModel(answer).save(function(err, res) {
        if (!err) {
            dfd.resolve(res);
        } else {
            dfd.reject(err);
        }
    });
    return dfd.promise;
};

module.exports.find = function(query) {
    var dfd = q.defer();
    AnswerModel.find(query, function(err, res) {
        if (!err) {
            dfd.resolve(res);
        } else {
            dfd.reject(err);
        }
    });
    return dfd.promise;
};