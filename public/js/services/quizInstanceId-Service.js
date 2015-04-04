angular.module('wildernessQuiz')
.service('Data', function(){
	return { quizInstanceId: Math.random() };
});