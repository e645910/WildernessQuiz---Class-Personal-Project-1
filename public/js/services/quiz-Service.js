angular.module('wildernessQuiz')
.service('quizService', function($q, $http, $rootScope){
	this.getQuiz = function(){
		var dfd = $q.defer();
		$http({
			method: 'GET',
				url: '/api/getQuiz'
		})
		.then(function(response){
			var quiz = createChoicesArrays(response.data);
			dfd.resolve(quiz);
		},
		function(errors){
			dfd.reject(errors);
		});
		return dfd.promise;
	};
	
//  ---------- save users answer selection ----------	
	this.saveAnswer = function(questionObj, quizInstanceId){
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/postAnswer',
			data: {
				//quizInstance: quizInstanceId,
			 	userId: $rootScope.userId,
				answer: questionObj.answer,
				isCorrect: questionObj.isCorrect,
				question: questionObj.question,
				selectedAnswer: questionObj.selectedAnswer,
				supportData: questionObj.supportData
			}
		})
		.success(function(response){
			console.log(666666666, response)
			dfd.resolve(response);
		})
		.catch(function(err){
			dfd.reject(err);
		});
		return dfd.promise;
	};
//  ---------- show answers in a randonmized order ----------	
	function createChoicesArrays (quizArr){
		for(var i = 0; i < quizArr.length; i++){
			var choices = 
				[
					{choiceString: quizArr[i].answer, correct: true},
					{choiceString: quizArr[i].badAnswer1, correct: false},
					{choiceString: quizArr[i].badAnswer2, correct: false},
					{choiceString: quizArr[i].badAnswer3, correct: false}
				];				
			quizArr[i].choices = randomizeOrder(choices);

			delete quizArr[i].badAnswer1;
			delete quizArr[i].badAnswer2;
			delete quizArr[i].badAnswer3;
		}
		return quizArr;
	};

//  -------------------- randomize the order of the answers ---------------------	
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