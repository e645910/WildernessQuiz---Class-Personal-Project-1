angular.module('wildernessQuiz')
.service('userService', function($q, $http, $rootScope){
	this.getUserInfo = function(quizInstanceId, userId){
		var dfd = $q.defer();
	$http({
		method: 'GET',
		url: '/api/getAnswer'// + "?quizInstanceId=" + quizInstanceId + "&userId=" + userId
	})
	.then(function(response){
		var correctAnswers = createAnswerCount(response.data);
		dfd.resolve(response.data);//shows data for userAnswer-Ctrl.js
	},
	function(err){
		dfd.reject(err);
	});
	return dfd.promise;
	};
	var numbCorrectAnwers = []
	function createAnswerCount(totalAnswers){
		for(var i = 0; i < totalAnswers.length; i++){
			if(totalAnswers[i].isCorrect === 'correct'){
				numbCorrectAnwers.push(totalAnswers[i]);
			}
		}
		if(numbCorrectAnwers.length === 5){
			var feedback = 'Okay. You scored a solid C. As long as you don’t run into any emergencies in the backcountry, you should be just fine. But you might want to retake this quiz to see if you’ve learned anything, and maybe invest in some tech to help you navigate through the woods on your own.'
			
		}
		console.log(11111111, feedback)
		console.log(22222222, numbCorrectAnwers.length)
		// return {
		// 	answersCorrect: function(){
		// 		return answerCorrect;
		// 	},
		// 	numbCorrectAnwers: function(){
		// 		return numbCorrectAnwers.length;
		// 	}
		// }
	}
});