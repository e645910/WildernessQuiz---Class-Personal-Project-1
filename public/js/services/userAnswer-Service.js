angular.module('wildernessQuiz')
.service('userService', function($q, $http, Data){
	this.getUserInfo = function(Data, selections){
		console.log(88888888, Data)
		var dfd = $q.defer();
	$http({
		method: 'GET',
		url: '/api/getAnswer'+ "?quizInstanceId=" + Data //0.5500252286437899
	}).then(function(response){
		console.log(66666666, response.data)
		dfd.resolve(response);
	},
	function(err){
		dfd.reject(err);
	});
	return dfd.promise;
	};
});