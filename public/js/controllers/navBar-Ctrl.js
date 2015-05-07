angular.module('wildernessQuiz')
.controller('navBarCtrl', function($scope, $rootScope, $location){
	$scope.selectQuestionForm = function(){
		$rootScope.userId === '55037e6f1af1c6c56fa12a3d' ? $scope.questionPath = $location.path('/question'): alert('You must be the quiz admin to access this function!');
	};
	$scope.selectQuizForm = function(){
		$scope.quizPath = $location.path('/quiz');
	};
});