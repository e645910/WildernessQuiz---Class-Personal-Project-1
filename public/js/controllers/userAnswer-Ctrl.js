angular.module('wildernessQuiz')
.controller('userCtrl', function($scope, $rootScope, userService, Data){

// provide a random number for quizInstanceId =============
	$scope.Data = Data.quizInstanceId;

	$scope.loadUserSelection = function(){
		userService.getUserInfo($scope.Data, $scope.selections, $rootScope.userId)
			.then(function(res){
				$scope.selections = res.data;
				console.log(7777777, res.data)
			},
			function(err){
				console.log(err);
			});
	};
	$scope.loadUserSelection();
});