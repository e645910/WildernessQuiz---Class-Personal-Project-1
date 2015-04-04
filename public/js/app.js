angular.module('wildernessQuiz', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/login-view.html',
			controller: 'authCtrl'
		 })
		.when('/userChoices', {
			templateUrl: 'views/answer-view.html',
			controller: 'userCtrl'
			// resolve: {
			// 	userChoice: function(userService){
			// 		return userService.getUserInfo();
			// 	}
			// }
		})
		.when('/nav',{
			templateUrl: 'views/navBar-view.html',
			controller: 'navBarCtrl'
		})
		.when('/question', {
			templateUrl: 'views/question-view.html',
			controller: 'questionCtrl',
			resolve: {
				question: function(questionService){
					return questionService.getQuestion();
				}
			}
		})
		.when('/quiz', {
			templateUrl: 'views/quiz-view.html',
			controller: 'quizCtrl'
			// resolve: {
			// 	quiz: function(quizService) {
			// 	return quizService.getQuiz();
			// 	}
			// }
		})
		.otherwise({
			redirectTo: '/'});
});