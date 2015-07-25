angular.module('wildernessQuiz')
.controller('quizCtrl', function($scope, $location, quizService, orderImages){

// provide a random number for each individual test results =============
	var randomId = Math.random()
	quizInstanceId = randomId

// create array for question and answers =================================
	var currentIndex = 0;
	var quiz = [];
	
	$scope.loadQuiz = function(){
		quiz = orderImages;
		$scope.currentQuestion = quiz[currentIndex];
		$scope.totalQuestions = orderImages;
		$scope.currentQuestionNumber = currentIndex + 1;
		console.log(11111111, orderImages);
	};
	$scope.loadQuiz();

// move to the next question and answers ================================
	$scope.nextQuestion = function(){
		$scope.currentQuestion.isCorrect = $scope.isCorrect;
		$scope.currentQuestion.selectedAnswer = $scope.selectedAnswer;
	quizService.saveAnswer($scope.currentQuestion, quizInstanceId)
		.then(function(){
			$scope.showNextButton = false;
			$scope.isCorrect = "";
			$scope.selectedAnswer = "";
			(currentIndex < quiz.length -1) ? currentIndex++ : $location.path('/userChoices');
			$scope.currentQuestion = quiz[currentIndex];
			$scope.currentQuestionNumber = currentIndex + 1;
		}),
		function(err){
			console.log(err);
		}
	};

// set answer values when selected then save them when next question selected 
	$scope.setAnswerValues = function(choiceString, isCorrect){
		$scope.selectedAnswer = choiceString;
		$scope.isCorrect = isCorrect;
		$scope.showNextButton = true;
		return choiceString, isCorrect;
	};
});