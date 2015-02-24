var app = angular.module('wildernessQuiz')
.controller('ProfileController', function($scope, questionService) {
	j$scope.clickCreate = function(){
		questionService.create
	}
	$scope.questions = questions;
});

// angular.module('MyTodos')

// .controller('ProfileController', function($scope, profile) {
// 	$scope.profile = profile