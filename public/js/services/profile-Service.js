angular.module('wildernessQuiz')
.service('profileService', function($q, $http, $location) {
	this.getProfile = function() {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: '/api/getProfile'
		}).then(function(response) {
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};
	this.postProfile = function(
			fullName,
			email,
			password,
			gender,
			age,
			bio
		) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/postProfile',
			data: {
				fullName: fullName,
				email: email,
				password: password,
				gender: gender,
				age: age,
				bio: bio
			}
		}).then(function(response) {
			deferred.resolve(response.data);
			$location.path('/nav').replace();
		});
		return deferred.promise;
	};
});