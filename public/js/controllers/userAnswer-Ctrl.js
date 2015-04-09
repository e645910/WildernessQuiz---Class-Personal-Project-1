angular.module('wildernessQuiz')
.controller('userCtrl', function($scope, $rootScope, userService, Data){

// provide a random number for quizInstanceId =============
	$scope.Data = Data.quizInstanceId;
	//var userSelections = []
	$scope.loadUserSelection = function(){
		userService.getUserInfo($scope.Data, $scope.selections, $rootScope.userId)
			.then(function(res){
				$scope.selections = res.data;
				// userSelections = res.data
				// $scope.selections = userSelections;
				console.log(77777777, $scope.selections)
			},
			function(err){
				console.log(err);
			});
	};
	$scope.loadUserSelection();
});