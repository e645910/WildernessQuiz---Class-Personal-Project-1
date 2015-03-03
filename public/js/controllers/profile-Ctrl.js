var app = angular.module('wildernessQuiz')
.controller('profileCtrl', function($scope, profileService){
 	$scope.clickRegister = function(){
 		profileService.postProfile(
	 		$scope.fullName,
	 		$scope.email,
	 		$scope.password,
	 		$scope.gender,
	 		$scope.age,
	 		$scope.bio
 		)
 	}
 });