angular.module('wildernessQuiz', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/views/login/login-view.html',
			controller: 'authCtrl',
		})
	// .when('/profile', {
	// 	templateUrl: '/views/profile-view.html',
	// 	controller: 'profileCtrl',
	// 	resolve: {
	// 		profile: function(profileCtrl){
	// 			return profileCtrl.getProfile();
	// 		}	
	// 	}	
	.when('/question', {
		templateUrl: '/views/quiz/question-view.html',
		controller: 'questionCtrl'
	 	// resolve: {	
	// 	// 	mainQuiz: function(mainQuizService) {
	// 	// 		return mainQuizService.getMainQuiz();
	// 	// 	}
	})
	.otherwise({
		redirectTo: '/'});
});
	

