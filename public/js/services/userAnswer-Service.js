angular.module('wildernessQuiz')
.service('userService', function($q, $http, $rootScope){
	this.getUserInfo = function(quizInstanceId, userId, selections){
		var dfd = $q.defer();
	$http({
		method: 'GET',
		url: '/api/getAnswer'// + "?quizInstanceId=" + quizInstanceId + "&userId=" + userId
	})
	.then(function(response){
		var selections = response.data;
		dfd.resolve(response);
	},
	function(err){
		dfd.reject(err);
	});
	return dfd.promise;
	};
});