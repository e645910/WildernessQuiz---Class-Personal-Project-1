angular.module('wildernessQuiz')
.service('quizService', function($q, $http){
	this.getQuiz = function(){
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url:'/api/getQuiz'
		}).then(function(response){
			dfd.resolve(response.data);
		});
		return dfd.promise;
	}
});