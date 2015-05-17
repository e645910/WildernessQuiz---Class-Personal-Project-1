angular.module('wildernessQuiz')
.controller('userCtrl', function($scope, $rootScope, $location, userService){
	$scope.loadUserSelection = function(){
		userService.getUserInfo(quizInstanceId, $rootScope.userId, $scope.selections)
			.then(function(res){
				$scope.selections = res.data;
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