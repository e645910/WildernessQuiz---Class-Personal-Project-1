angular.module('wildernessQuiz')
.service('questionService', function($q, $http) {
  this.createQuestion = function(){
    var dfd = $q.defer();
      $http({
        method: 'POST',
        url: '/api/question'
      }).success(function(response){
            console.log(response)
            dfd.resolve(response);
        }).catch(function(err){
            console.log("error Posting question", err);
            dfd.reject(err);
        });
        return dfd.promise;
    };
  this.getQuestion = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: '/api/question'
    }).then(function(response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };
});