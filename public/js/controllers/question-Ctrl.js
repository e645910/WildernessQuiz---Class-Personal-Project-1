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
 		);
	 		$scope.question = '';
		    $scope.answer = '';
		    $scope.badAnswer1 = '';
		    $scope.badAnswer2 = '';
		    $scope.badAnswer3 = '';
		    $scope.supportData = '';
		    $scope.image = '';
	 	};

//==================== * update records * ============================

// this function will show the first question & answer to update	
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

// this function will show the next question & answer to update 
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

// this function updates the question & answer in the database
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