angular.module('wildernessQuiz')
.controller('userCtrl', function($scope, $rootScope, userService, Data){

// provide a random number for quizInstanceId =============
	$scope.Data = Data.quizInstanceId;

	$scope.loadUserSelection = function(){
		userService.getUserInfo($scope.Data, $scope.selections, $rootScope.userId)
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
});