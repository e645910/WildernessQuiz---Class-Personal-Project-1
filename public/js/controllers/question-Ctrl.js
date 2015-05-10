angular.module('wildernessQuiz')
.controller('questionCtrl', function($scope, questionService){
 	$scope.clickSaveQuestion = function(){
 		questionService.postQuestion(
 			$scope.question,
 			$scope.answer,
 			$scope.badAnswer1,
 			$scope.badAnswer2,
 			$scope.badAnswer3,
 			$scope.supportData,
 			$scope.image
 		)
	 		$scope.question = '';
		    $scope.answer = '';
		    $scope.badAnswer1 = '';
		    $scope.badAnswer2 = '';
		    $scope.badAnswer3 = '';
		    $scope.supportData = '';
		    $scope.image = '';
	 	};
	 	
	$scope.clickUpDate = function(){
 		questionService.getQuestion()
 		.then(function(res){
	 		$scope.question = res.question;
 			$scope.answer = res.answer;
 			$scope.badAnswer1 = res.badAnswer1;
 			$scope.badAnswer2 = res.badAnswer2;
 			$scope.badAnswer3 = res.badAnswer3;
 			$scope.supportData = res.supportData;
 			$scope.image = res.image;
 		})
 	};
});