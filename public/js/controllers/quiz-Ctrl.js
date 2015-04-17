var app = angular.module('wildernessQuiz')
.controller('quizCtrl', function($scope, $location, quizService){

// provide a random number for each individual test results =============
	var randomId = Math.random()
	quizInstanceId = randomId
	console.log(11111111, quizInstanceId)
	
	var currentIndex = 0;
	var quiz = [];

	$scope.loadQuiz = function(){
		quizService.getQuiz()
			.then(function(res){
				quiz = res;
				$scope.currentQuestion = quiz[currentIndex];
			}, 
			function(err){
				console.log(err)
			});
	};
	$scope.loadQuiz();


// next question button on quiz-view.html ==================
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
		}),
		function(err){
			console.log(err);
		}
	};

// used to show users selection on quiz view  =================
	$scope.setAnswerValues = function(choiceString, isCorrect) {
		$scope.selectedAnswer = choiceString;
		$scope.isCorrect = isCorrect;
		$scope.showNextButton = true;
		return choiceString, isCorrect;
	};

// display the answer-view.html view =========================
	$scope.loadUserSelection = function() {
		$scope.choicePath = $location.path('/userChoices');
	};
});