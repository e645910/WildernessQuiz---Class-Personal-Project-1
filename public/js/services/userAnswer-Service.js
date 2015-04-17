angular.module('wildernessQuiz')
.service('userService', function($q, $http, $rootScope){
	this.getUserInfo = function(quizInstanceId, userId, selections){
		console.log(5555555, quizInstanceId, $rootScope.userId)
		var dfd = $q.defer();
	$http({
		method: 'GET',
		url: '/api/getAnswer' + "?quizInstanceId=" + quizInstanceId + "&userId=" + userId
	})
	.then(function(response){
		var selections = response.data;
		console.log(66666666, selections)
		dfd.resolve(response);
	},
	function(err){
		dfd.reject(err);
	});
	return dfd.promise;
	};
});