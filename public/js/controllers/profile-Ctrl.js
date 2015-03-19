var app = angular.module('wildernessQuiz')
.controller('profileCtrl', function($scope, profileService){
 	$scope.clickProfile = function(){
 		profileService.postProfile(
	 		$scope.gender,
	 		$scope.age
 		)
 	}
 });