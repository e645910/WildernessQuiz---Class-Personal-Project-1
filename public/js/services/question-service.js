angular.module('wildernessQuiz')
.service('questionService', function($q, $http) {
	this.postQuestion = function(question, answer, badAnswer1, badAnswer2, badAnswer3, supportData, image){
	    var dfd = $q.defer();
      	$http({
        method: 'POST',
        url: '/api/postQuestion',
        data: {
          	question: question,
          	answer: answer,
          	badAnswer1: badAnswer1,
          	badAnswer2: badAnswer2,
          	badAnswer3: badAnswer3,
          	supportData: supportData,
          	image: image
        }
	    }).success(function(response){
	        dfd.resolve(response);
	    }).catch(function(err){
	        dfd.reject(err);
	    });
	   return dfd.promise;
	};

	this.getQuestion = function() {
	    var dfd = $q.defer();
	    $http({
	    method: 'GET',
	    url: '/api/getQuestion'
	    }).then(function(response) {
	        dfd.resolve(response.data[0]);
	    });
	    return dfd.promise;
	};
});