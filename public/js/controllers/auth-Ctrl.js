var app = angular.module('wildernessQuiz');

app.controller('authCtrl', function($scope, $location, authService){
	$scope.state = 'login';
	$scope.clickLogin = function(){
		authService.login($scope.email, $scope.password).then(function(){
			$location.path('/api/user');
		}).catch(function(err){
			$scope.loginError = true;
		});
	};


});