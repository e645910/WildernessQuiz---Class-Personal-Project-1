angular.module('wildernessQuiz')
.service('quizService', function($q, $http, $rootScope){
	this.getQuiz = function(){
		var dfd = $q.defer();
		$http({
			method: 'GET',
				url: '/api/getQuiz'
		})
		.then(function(response){
			console.log(222222222, response.data)
			var quiz = createChoicesArrays(response.data);
			dfd.resolve(quiz);
		},
		function(err){
			dfd.reject(err);
		});
		return dfd.promise;
	};
	
// save user's answer selection ============================	
	this.saveAnswer = function(questionObj, quizInstanceId){
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/postAnswer',
			data: {
			 	userId: $rootScope.userId,
			 	quizInstanceId: quizInstanceId,
			 	question: questionObj.question,
				answer: questionObj.answer,
				selectedAnswer: questionObj.selectedAnswer,
				isCorrect: questionObj.isCorrect,
				supportData: questionObj.supportData
			}
		})
		.success(function(response){
			dfd.resolve(response);
		})
		.catch(function(err){
			dfd.reject(err);
		});
		return dfd.promise;
	};

// show answer selection in a randonmized order ============	
	function createChoicesArrays(quizArr){
		for(var i = 0; i < quizArr.length; i++){
			var choices = 
				[
					{choiceString: quizArr[i].answer, correct: "CORRECT"},
					{choiceString: quizArr[i].badAnswer1, correct: "INCORRECT"},
					{choiceString: quizArr[i].badAnswer2, correct:  "INCORRECT"},
					{choiceString: quizArr[i].badAnswer3, correct: "INCORRECT"}
				];					
			quizArr[i].choices = randomizeOrder(choices);

			delete quizArr[i].badAnswer1;
			delete quizArr[i].badAnswer2;
			delete quizArr[i].badAnswer3;
		}
		return quizArr;
	};

// randomize the order of the answers ======================	
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
