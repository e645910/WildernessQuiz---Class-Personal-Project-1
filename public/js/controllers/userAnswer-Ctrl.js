angular.module('wildernessQuiz')
.controller('userCtrl', function($scope, $rootScope, $location, userService){
	$scope.loadUserSelection = function(){
		userService.getUserInfo(quizInstanceId, $rootScope.userId, $scope.selections)
			.then(function(res){
				$scope.selections = res.data;
				$scope.isCorrectFilter = function(selections){
					return selections.isCorrect === 'CORRECT';
				}
			},
			function(err){
			});
	};
	$scope.loadUserSelection();
	
// allow the user to retake the test ======================
	$scope.retakeTestClick = function(){
		$scope.reTakeQuizPath = $location.path('/quiz');
	};
});