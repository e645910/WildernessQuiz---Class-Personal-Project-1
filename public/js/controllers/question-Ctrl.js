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

	var updateIndex = 0;
	var updateArray = []

	$scope.clickUpDate = function(){
 		questionService.getQA()
 		.then(function(res){
 			updateArray = res.data[updateIndex];
	    	arrayLength = res.data.length;
	    	console.log(22222222, updateIndex)
	    	console.log(33333333, arrayLength)
 			console.log(44444444, updateArray)
	 		$scope.question = updateArray.question;
 			$scope.answer = updateArray.answer;
 			$scope.badAnswer1 = updateArray.badAnswer1;
 			$scope.badAnswer2 = updateArray.badAnswer2;
 			$scope.badAnswer3 = updateArray.badAnswer3;
 			$scope.supportData = updateArray.supportData;
 			$scope.image = updateArray.image;
 		})
 	};

 	$scope.clickUpdateNext = function(){
 		questionService.nextUpdate()
 		.then(function(res){
 			(updateIndex < arrayLength - 1) ? updateIndex++: alert('No more records to update!');
	  		updateArray = res.data[updateIndex];
 			console.log(555555555, updateIndex)
 			console.log(666666666, res.data[updateIndex])
 			console.log(777777777, updateArray)
 			$scope.question = updateArray.question;
 			$scope.answer = updateArray.answer;
 			$scope.badAnswer1 = updateArray.badAnswer1;
 			$scope.badAnswer2 = updateArray.badAnswer2;
 			$scope.badAnswer3 = updateArray.badAnswer3;
 			$scope.supportData = updateArray.supportData;
 			$scope.image = updateArray.image;
 		})
 	};
});