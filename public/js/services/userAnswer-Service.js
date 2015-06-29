angular.module('wildernessQuiz')
.service('userService', function($q, $http, $rootScope){
	this.getUserInfo = function(quizInstanceId, userId){
		var dfd = $q.defer();
		
	$http({
		method: 'GET',
		url: '/api/getAnswer'// + "?quizInstanceId=" + quizInstanceId + "&userId=" + userId
 	})
	.then(function(response){
		var correctAnswers = createCount(response.data);
		dfd.resolve(response.data);
	},
	function(err){
		dfd.reject(err);
	});
	return dfd.promise;
	};

	function createCount(correctAnswers){
		var totalAnswers = []
		var feedback;
		for(var i = 0; i < correctAnswers.length; i++){
			if(correctAnswers[i].isCorrect === 'correct'){
				totalAnswers.push(correctAnswers[i]);
			}
		}
		totalCorrectAnwers = totalAnswers.length;
		console.log(222222222, totalAnswers.length)
		
		if(totalCorrectAnwers === 5){
			feedback = 'Okay. You scored a solid C. As long as you don’t run into any emergencies in the backcountry, you should be just fine. But you might want to retake this quiz to see if you’ve learned anything, and maybe invest in some tech to help you navigate through the woods on your own.'
		 } 
		console.log(3333333333, feedback)
	};	
});

// original code ==================================================
// 	.then(function(response){
// 		dfd.resolve(response.data);
// 	})
// 	.then(function(response){
// 		var userAnswers = response
// 		console.log(111111111, response)
// 		dfd.resolve(response)

// 		// function createCount(totalAnswers){
// 		// 	var answers = [];
// 		// 	for(var i = 0; i < totalAnswers.length; i++){
// 		// 		if(totalAnswers[i] === 'correct'){
// 		// 			answers.push(totalAnswers[i]);
// 		// 		}
// 		// 		quizDetails.totalCorrectAnwers = answers.length
// 		// 	}
// 		// } 
// 	},
// 	function(err){
// 		dfd.reject(err);
// 	});
// 	return dfd.promise;
// 	};
// });
