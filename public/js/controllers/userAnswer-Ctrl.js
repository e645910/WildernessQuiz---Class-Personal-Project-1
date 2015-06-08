angular.module('wildernessQuiz')
.controller('userCtrl', function($scope, $rootScope, $location, userService){
	$scope.loadUserSelection = function(){
		userService.getUserInfo(quizInstanceId, $rootScope.userId, $scope.selections)
			.then(function(res){
				$scope.selections = res;
				$scope.isCorrectFilter = function(selections){
					//console.log(222222222, $scope.selections.length)//shows count of all records - runs twice
					//console.log(333333333, selections.isCorrect.length)//show count of string (correct)
					//console.log(77777777, (selections.isCorrect === 'correct').length) shows undefined
					return selections.isCorrect === 'correct';
				}
				// function correctAnswersFeedback(){
				// 	//if($scope.isCorrectFilter === 5){
				// 		console.log(4444444444, $scope.selections.length)
				// 	//}
				// }
				// correctAnswersFeedback();
			},
			function(err){
			});
			

	};
	$scope.loadUserSelection();

	
// give user the option to retake the quiz ========================
	$scope.retakeTestClick = function(){
		$scope.reTakeQuizPath = $location.path('/quiz');
	};
});