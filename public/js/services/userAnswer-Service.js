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
			var data = {
				totalAnswers: totalCorrectAnwers,
				feedback: correctAnswers,
				answers: response.data
			}
			dfd.resolve(data);
		},
		function(err){
			dfd.reject(err);
		});
		return dfd.promise;
	};

	function createCount(correctAnswers){
		var totalAnswers = []
		for(var i = 0; i < correctAnswers.length; i++){
			if(correctAnswers[i].isCorrect === 'correct'){
				totalAnswers.push(correctAnswers[i]);
			}
		}
		totalCorrectAnwers = totalAnswers.length;
		if(totalCorrectAnwers === 5){
			feedback = 'Okay. You scored a solid C. As long as you don’t run into any emergencies in the backcountry, you should be just fine. But you might want to retake this quiz to see if you’ve learned anything, and maybe invest in some tech to help you navigate through the woods on your own.'
		 } 
		if(totalCorrectAnwers === 5){
			feedback = 'Okay. You scored a solid C. As long as you don’t run into any emergencies in the backcountry, you should be just fine. But you might want to retake this quiz to see if you’ve learned anything, and maybe invest in some tech to help you navigate through the woods on your own.'
		 } 
		return feedback;
		return totalAnswers.length
	};	
});