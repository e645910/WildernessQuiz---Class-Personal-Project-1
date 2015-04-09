angular.module('wildernessQuiz')
.service('userService', function($q, $http){
	this.getUserInfo = function(Data, selections, userId){
		console.log(5555555, Data, userId)
		var dfd = $q.defer();
	$http({
		method: 'GET',
		url: '/api/getAnswer' + "?quizInstanceId=" + Data + "&userId=" + userId
	})
	.then(function(response){
		console.log(66666666, response.data)
		dfd.resolve(response);
	},
	function(err){
		dfd.reject(err);
	});
	return dfd.promise;
	};
});