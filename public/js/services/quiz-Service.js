angular.module('wildernessQuiz')
.service('quizService', function($q, $http){
	this.getQuiz = function(){
		var dfd = $q.defer();
		$http({
			method: 'GET',
				url: '/api/getQuiz'
		}).then(function(response){
			//console.log(11111111, response.data)
			var quiz = createAnswersArrays(response.data);
			dfd.resolve(quiz);
		},
		function(errors){
			dfd.reject(errors);
		});
			return dfd.promise;
	};

	function createAnswersArrays (quizArr) {
		for(var i = 0; i < quizArr.length; i++){
			var answers = 
				[
					{answerString: quizArr[i].answer, correct: true},
					{answerString: quizArr[i].badAnswer1, correct: false},
					{answerString: quizArr[i].badAnswer2, correct: false},
					{answerString: quizArr[i].badAnswer3, correct: false}
				];	
			quizArr[i].answers = randomizeOrder(answers);
		}
		return quizArr;
	};

	function randomizeOrder(arr){
		var newArr = [];
		while(arr.length){
			var randomIndex = Math.floor(Math.random() * arr.length)
			newArr.push(arr[randomIndex]);
			arr.splice(randomIndex, 1);
		}

		return newArr;
	};
	
});