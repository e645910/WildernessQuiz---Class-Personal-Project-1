angular.module('wildernessQuiz')
.controller('questionCtrl', function($scope, questionService){
	$scope.showNextBtn = false;
	$scope.showSaveBtn = false;

//==================== * create new record * ============================	

// this function clears the text boxes if there is any info in it
	$scope.clickClearQuestion = function(){
		$scope.question = '';
	    $scope.answer = '';
	    $scope.badAnswer1 = '';
	    $scope.badAnswer2 = '';
	    $scope.badAnswer3 = '';
	    $scope.supportData = '';
	    $scope.image = '';
	    $scope.showSaveBtn = true;
		};

// this function then saves the new question
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
 		$scope.showNextBtn = true;
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
		$scope.showNextBtn = false;
	}

//this function will remove the specifically shown question and answer
	$scope.clickRemoveRecord =function(){
		questionService.removeRecord($scope._id);
		questionService.getNextQA();
	 	};
});