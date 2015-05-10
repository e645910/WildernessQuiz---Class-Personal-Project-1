angular.module('wildernessQuiz')
.service('AuthService', function($q, $http){
	this.register = function(email, password){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/register',
			data: {
				email: email,
				password: password
			}
		})
		.then(function(response){
			deferred.resolve(response);
		})
		.catch(function(err) {
			deferred.reject(err);
		});
		return deferred.promise;
	};
	
	this.login = function(email, password){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/auth',
			data: {
				email: email,
				password: password
			}
		})
		.then(function(response){
			deferred.resolve(response);
		})
		.catch(function(err) {
			deferred.reject(err);
		});
		return deferred.promise;
	};
});