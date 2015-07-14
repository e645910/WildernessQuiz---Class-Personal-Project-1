angular.module('wildernessQuiz')
.controller('navBarCtrl', function($scope, $rootScope, $location){
	$scope.selectQuestionForm = function(){
		if($rootScope.userId === '55a3d59e0a50aa1100c8b34f'){
			$scope.questionPath = $location.path('/question')
		}else {
		 	alert('You must be a quiz admin to access this function!');
		 }
	};
	$scope.selectQuizForm = function(){
		$scope.quizPath = $location.path('/quiz');
	};
});