var QuizModel = require('../models/questionModel');
var q = require('q');

module.exports.get = function(query){
    var dfd = q.defer();
    QuizModel.findOne(query, function(err, results){
        if(!err){
            dfd.resolve(results)
        } else {
            dfd.reject(err)
        }
    });
    return dfd.promise;
};