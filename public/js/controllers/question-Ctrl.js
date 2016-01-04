angular.module('wildernessQuiz')
.controller('questionCtrl', function($scope, questionService){
	$scope.showNextBtn = false;
	$scope.showSaveBtn = false;

	function clearQuestions(){
		$scope.question = '';
	    $scope.answer = '';
	    $scope.badAnswer1 = '';
	    $scope.badAnswer2 = '';
	    $scope.badAnswer3 = '';
	    $scope.supportData = '';
	    $scope.image = '';
	}

	function getQuestions(){
		$scope._id = res._id;
		$scope.question = res.question;
		$scope.answer = res.answer;
		$scope.badAnswer1 = res.badAnswer1;
		$scope.badAnswer2 = res.badAnswer2;
		$scope.badAnswer3 = res.badAnswer3;
		$scope.supportData = res.supportData;
		$scope.image = res.image;
	}

//==================== * create new record * ============================	

	$scope.clickClearQuestion = function(){
		clearQuestions();
	    $scope.showSaveBtn = true;
		};

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
			clearQuestions();
	 };

//==================== * update records * ============================

	$scope.clickGetQA = function(){
 		questionService.getQA()
 		.then(function(res){
 			getQuestions();
 		});
 		$scope.showNextBtn = true;
 	};

 	$scope.clickNextRecord = function(){
 		questionService.getNextQA()
 		.then(function(res){
 			getQuestions();
 		});
 	};

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
		);
		$scope.showNextBtn = false;
	};

	$scope.clickRemoveRecord =function(){
		questionService.removeRecord($scope._id);
		questionService.getNextQA();
	 	};
});