var app = angular.module('wildernessQuiz')
.service('authService', function($q, $http){
	this.register = function(email, password) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/register',
			data: {
				email: email,
				password: password
			}
		}).then(function(response) {
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};
	this.login = function(email, password){
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/auth',
			data: {
				email: email,
				password: password
			} 
		}).then(function(response){
			dfd.resolve(response.data);
		}).catch(function(err){
			console.log("error logging in");
			dfd.reject(err);
		}); 
		return dfd.promise;
	};
});