angular.module('wildernessQuiz')
.controller('userCtrl', function($scope, $rootScope, $location, userService){
	$scope.loadUserSelection = function(){
		userService.getUserInfo(quizInstanceId, $rootScope.userId)
			.then(function(res){
				$scope.selections = res;
				//$scope.totalCorrectAnwers = userService.createCount;
				//console.log(111111111, $scope.totalCorrectAnwers)
				$scope.isCorrectFilter = function(selections){
					return selections.isCorrect === 'correct';
				}
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