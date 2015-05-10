var app = angular.module('wildernessQuiz', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/login-view.html',
			controller: 'authCtrl'
		 })
		.when('/userChoices', {
			templateUrl: 'views/userAnswer-view.html',
			controller: 'userCtrl'
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
		})
		.otherwise({
			redirectTo: '/'});
});