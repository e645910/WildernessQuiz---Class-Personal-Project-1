angular.module('wildernessQuiz')
.controller('authCtrl', function($scope, $location, authService){
	$scope.clickLogin = function(){
		authService.login($scope.email, $scope.password).then(function(){
			$location.path('/nav');
		}).catch(function(err){
			$scope.loginError = true;
		});
	};
	$scope.clickRegister = function() {
		$scope.profilePath = $location.path('/profile');
	};
});