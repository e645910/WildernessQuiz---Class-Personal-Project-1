var app = angular.module('wildernessQuiz')
.controller('quizCtrl', function($scope, $rootScope, quizService){
	
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



// -------------- next question button on quiz-view.html -------------
	$scope.nextQuestion = function(){
		$scope.currentQuestion.isCorrect = $scope.isCorrect;
		$scope.currentQuestion.selectedAnswer = $scope.selectedAnswer;
		quizService.saveAnswer($scope.currentQuestion).then(function(){
			$scope.isCorrect = "";
			$scope.selectedAnswer = "";
			if (currentIndex < quiz.length - 1){
				currentIndex++;
			}
			$scope.currentQuestion = quiz[currentIndex];
		})
		
	};
// ------------- previous question button (not used in this app) ----------	
	$scope.prevQuestion = function(){
		if (currentIndex > 0) {
			currentIndex--;
		}
		$scope.currentQuestion = quiz[currentIndex];
	};

// ----------- used to show users selection on quiz view for testing purpose  --------------	
	$scope.setAnswerValues = function(choiceString, isCorrect) {
		$scope.selectedAnswer = choiceString;
		$scope.isCorrect = isCorrect;

		return choiceString, isCorrect;
	}

});