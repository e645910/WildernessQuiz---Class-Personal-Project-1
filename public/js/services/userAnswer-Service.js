angular.module('wildernessQuiz')
.service('userService', function($q, $http, $rootScope){
	this.getUserInfo = function(quizInstanceId, userId){
		var dfd = $q.defer();
	$http({
		method: 'GET',
		url: '/api/getAnswer'// + "?quizInstanceId=" + quizInstanceId + "&userId=" + userId
	})
	.then(function(response){
		var correctAnswers = createIsCorrrectCount(response.data);

		dfd.resolve(response.data);//shows data for userAnswer-Ctrl.js
	},
	function(err){
		dfd.reject(err);
	});
	return dfd.promise;
	};
	function createIsCorrrectCount(correctAnswers){
		var numbCorrectAnwers = []
		for(var i = 0; i < correctAnswers.length; i++){
			if(correctAnswers[i].isCorrect === 'correct'){
				//console.log(111111111, correctAnswers[i].isCorrect)// shows the word correct
				//console.log(222222222, correctAnswers[i].isCorrect.length)//shows the length of the word correct
				//console.log(333333333, correctAnswers[i])//shows only the first answer in the array
				//console.log(444444444, correctAnswers[i].length)//is undefined
				numbCorrectAnwers.push(correctAnswers[i]);
			}
			//console.log(555555555, correctAnswers.length)//shows the total count of user answers
			//console.log(666666666, numbCorrectAnwers)//shows the total count of user answers
			//console.log(666666666, numbCorrectAnwers.length)//shows the length of the word correct 
			//return correctAnswers.length
		}
		console.log(666666666, numbCorrectAnwers.length)
		console.log(555555555, correctAnswers.length)
	}
});