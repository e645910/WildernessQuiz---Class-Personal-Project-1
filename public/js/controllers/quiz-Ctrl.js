var app = angular.module('wildernessQuiz')
.controller('quizCtrl', function($scope, quizService){
	
	var currentIndex = 0;
	var quiz = [];

	$scope.loadQuiz = function() {
		quizService.getQuiz()
			.then(function(res){
				quiz = res;
				console.log(2222222, quiz)
				$scope.currentQuestion = quiz[currentIndex];
				console.log(2222222, quiz[currentIndex])
			}, 
			function(err){
				console.log(err)
			});
	};
	$scope.loadQuiz();

	$scope.nextQuestion = function() {
		$scope.currentQuestion.isCorrect = $scope.isCorrect;
		$scope.currentQuestion.selectedAnswer = $scope.selectedAnswer;
		$scope.isCorrect = "";
		$scope.selectedAnswer = "";
		if (currentIndex < quiz.length - 1){
			currentIndex++;
		}
		$scope.currentQuestion = quiz[currentIndex];
		console.log(quiz);
	};


	$scope.prevQuestion = function(){
		if (currentIndex > 0) {
			currentIndex--;
		}
		$scope.currentQuestion = quiz[currentIndex];

	};

	$scope.setAnswerValues = function(answerString, isCorrect) {
		$scope.selectedAnswer = answerString;
		$scope.isCorrect = isCorrect;
	}
	
	
});