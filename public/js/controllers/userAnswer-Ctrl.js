angular.module('wildernessQuiz')
.controller('userCtrl', function($scope, $rootScope, userService, Data){

// provide a random number for quizInstanceId =============
	$scope.Data = Data.quizInstanceId;

	$scope.loadUserSelection = function(){
		userService.getUserInfo($scope.Data, $scope.selections, $rootScope.userId)
			.then(function(res){
				$scope.selections = res.data;
			},
			function(err){
				console.log(err);
			});
	};
	$scope.loadUserSelection();
});


			
				// var array = $scope.selections;
				// console.log(7777777, array)
				// function userArray(array){
				// 	for(var i = 0; i < array.length; i++){
				// 		if(array[i].isCorrect === 'CORRECT'){
				// 			var isCorrectArray = [];
				// 			isCorrectArray.push()
				// 			console.log(99999999, array[i])
				// 			return array[i].isCorrect = true;
				// 		}
				// 	}
				// };
				// userArray(array);
			