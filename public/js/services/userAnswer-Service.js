angular.module('wildernessQuiz')
.service('userService', function($q, $http, $rootScope){
	this.getUserInfo = function(quizInstanceId, userId){
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/getAnswer' + '?quizInstanceId=' + quizInstanceId + '&userId=' + userId
	 	})
		.then(function(response){
			var correctAnswers = createCount(response.data);
			var data = {
				totalAnswers: totalCorrectAnwers,
				feedback: correctAnswers,
				answers: response.data
			};
			dfd.resolve(data);
		},
		function(err){
			dfd.reject(err);
		});
		return dfd.promise;
	};

	function createCount(correctAnswers){
		var totalAnswers = [];
		for(var i = 0; i < correctAnswers.length; i++){
			if(correctAnswers[i].isCorrect === 'correct'){
				totalAnswers.push(correctAnswers[i]);
			}
			return totalCorrectAnwers = totalAnswers.length;
		}

		if(totalCorrectAnwers <= 2){
			feedback = 'You might want to think twice before heading out on the trail this summer.';
		 }
		if(totalCorrectAnwers === 3 || totalCorrectAnwers === 4){
			feedback = 'You’ll survive, but just barely. Consider brushing up on your basic backcountry knowledge—and reading what survival pros like Les Stroud have to say—before hitting the trail. Then retake the quiz to see if you\'ve improved.';
		 }
		if(totalCorrectAnwers === 5 || totalCorrectAnwers === 6){
			feedback = 'Okay. You scored a solid C. As long as you don’t run into any emergencies in the backcountry, you should be just fine. But you might want to retake this quiz to see if you’ve learned anything, and maybe invest in some tech to help you navigate through the woods on your own.';
		 } 
		if(totalCorrectAnwers >= 7 && totalCorrectAnwers <= 9){
			feedback = 'Good job, rookie. You’re well prepared to face whatever the wild throws at you.';
		 }
		if(totalCorrectAnwers >= 10){
			feedback = 'Have you ever considered a career as a backcountry guide? Seriously, think about it. You\'re probably even ready to tackle some of the world\'s most dangerous hikes.';
		 }
	return feedback;
	}	
});