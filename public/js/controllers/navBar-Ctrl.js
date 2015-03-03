angular.module('wildernessQuiz')
.controller('navBarCtrl', function($scope, $location){
	$scope.selectQuestionForm = function(){
		$scope.questionPath = $location.path('/question');
	};
	$scope.selectQuizForm = function(){
		$scope.quizPath = $location.path('/quiz');
	};
	$scope.selectUpdateQuestionForm = function(){
		$scope.questionPath = $location.path('/');
	};
	$scope.selectUpdateProfileForm = function() {
		$scope.profilePath = $location.path('/profile');
	};
});