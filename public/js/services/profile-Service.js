angular.module('wildernessQuiz')
.service('profileService', function($q, $http, $location) {
	this.getProfile = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/getProfile'
		}).then(function(response) {
			dfd.resolve(response.data);
		});
		return dfd.promise;
	};
	this.postProfile = function(
			fullName,
			email,
			password,
			gender,
			age,
			bio
		){
		var dfd = $q.defer();
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
			dfd.resolve(response.data);
			$location.path('/nav').replace();
		}).catch(function(err){
            dfd.reject(err);
        });
        return dfd.promise;
    };
});