angular.module('wildernessQuiz')
.questionService('questionService', function($q, $http) {
  this.create = function(){
    var dfd = $q.defer();
      $http({
        method: 'POST',
        url: '/api/post'
        // data: {
        // }
      }).success(function(response){
            console.log(response)
            dfd.resolve(response);
        }).catch(function(err){
            console.log("error logging in", err);
            dfd.reject(err);
        });
        return dfd.promise;
    };
  this.getProfile = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: '/api/profile'
    }).then(function(response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };
});