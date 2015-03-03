angular.module('wildernessQuiz')
.service('questionService', function($q, $http) {
  this.getQuestion = function() {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: '/api/getQuestion'
      }).then(function(response) {
        deferred.resolve(response.data);
      });
      return deferred.promise;
    };
  this.postQuestion = function(
        question,
        answer,
        badAnswer1,
        badAnswer2,
        badAnswer3
        ){
    var dfd = $q.defer();
      $http({
        method: 'POST',
        url: '/api/postQuestion',
        data: {
          question: question,
          answer: answer,
          badAnswer1: badAnswer1,
          badAnswer2: badAnswer2,
          badAnswer3: badAnswer3
        }
      }).success(function(response){
            dfd.resolve(response);
        }).catch(function(err){
            dfd.reject(err);
        });
        return dfd.promise;
    };
});