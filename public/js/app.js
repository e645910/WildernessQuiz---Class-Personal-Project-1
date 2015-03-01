angular.module('wildernessQuiz', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/login-view.html',
			controller: 'authCtrl'
		 })
		.when('/profile', {
			templateUrl: 'views/profile-view.html',
			controller: 'profileCtrl'
		})
		.when('/nav',{
			templateUrl: 'views/navBar-view.html'
		})
		.when('/question', {
			templateUrl: 'views/question-view.html',
			controller: 'questCtrl'
		})
		.when('/quiz', {
			templateUrl: 'views/quiz-view.html',
			controller: 'quizCtrl',
			resolve: {
				quiz: function(quizService) {
				return quizService.getQuiz();
				}
			}
		})
		.otherwise({
			redirectTo: '/'});
});