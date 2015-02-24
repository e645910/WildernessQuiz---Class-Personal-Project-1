var app = angular.module('wildernessQuiz');

app.service('authService', function($q, $http){
	this.login = function(email, password){
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: 'api/auth',
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