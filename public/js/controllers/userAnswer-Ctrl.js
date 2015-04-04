angular.module('wildernessQuiz')
.controller('userCtrl', function($scope, userService, Data){

// provide a random number for quizInstanceId =============
	$scope.Data = Data.quizInstanceId;

	$scope.loadUserSelection = function(){
		userService.getUserInfo($scope.Data, $scope.selections)
			.then(function(res){
				$scope.selections = res.data;
				console.log(55555555, res.data)
			},
			function(err){
				console.log(err);
			});
	};
	$scope.loadUserSelection();
});