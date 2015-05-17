angular.module('wildernessQuiz')
.controller('questionCtrl', function($scope, questionService){
 	$scope.clickSaveQuestion = function(){
 		questionService.saveQuestion(
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

//this function will show the first question on the create questions and answers view	
	$scope.clickGetQA = function(){
 		questionService.getQA()
 		.then(function(res){
 			$scope._id = res._id,
	 		$scope.question = res.question;
 			$scope.answer = res.answer;
 			$scope.badAnswer1 = res.badAnswer1;
 			$scope.badAnswer2 = res.badAnswer2;
 			$scope.badAnswer3 = res.badAnswer3;
 			$scope.supportData = res.supportData;
 			$scope.image = res.image;
 		})
 	};

//this function will show each of the proceeding questions and answers
 	$scope.clickNextRecord = function(){
 		questionService.getNextQA()
 		.then(function(res){
 			$scope._id = res._id;
 			$scope.question = res.question;
 			$scope.answer = res.answer;
 			$scope.badAnswer1 = res.badAnswer1;
 			$scope.badAnswer2 = res.badAnswer2;
 			$scope.badAnswer3 = res.badAnswer3;
 			$scope.supportData = res.supportData;
 			$scope.image = res.image;
 		})
 	};

//this function updates the record shown ============================
	$scope.clickUpdateRecord = function(){
		questionService.updateQA(
			$scope._id,
 			$scope.question,
 			$scope.answer,
 			$scope.badAnswer1,
 			$scope.badAnswer2,
 			$scope.badAnswer3,
 			$scope.supportData,
 			$scope.image
		)
	}
});