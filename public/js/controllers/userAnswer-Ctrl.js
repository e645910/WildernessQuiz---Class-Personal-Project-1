angular.module('wildernessQuiz')
.controller('userCtrl', function($scope, $rootScope, $location, userService){

	console.log(33333333, quizInstanceId, $rootScope.userId)
	$scope.loadUserSelection = function(){
		userService.getUserInfo(quizInstanceId, $rootScope.userId, $scope.selections)
			.then(function(res){
				$scope.selections = res.data;
				console.log(77777777, $scope.selections)
				$scope.isCorrectFilter = function(selections){
					return selections.isCorrect === 'CORRECT';	
				}
			},
			function(err){
				console.log(err);
			});
	};
	$scope.loadUserSelection();
	
// allow the user to retake the test ======================
	$scope.retakeTestClick = function(){
		$scope.reTakeQuizPath = $location.path('/quiz');
	};
});