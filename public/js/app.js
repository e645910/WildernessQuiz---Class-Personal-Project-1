var app;
app = angular.module('wildernessQuiz', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl: 'views/login-view.html',
                controller: 'authCtrl'
            })

            .when('/nav',
            {
                templateUrl: 'views/navBar-view.html',
                controller: 'navBarCtrl'
            })

            //.when('/question',
            //{
            //    templateUrl: 'views/question-view.html',
            //    controller: 'questionCtrl',
            //    resolve: {
            //
            //    }
            })

            .when('/quiz',
            {
                templateUrl: 'views/quiz-view.html',
                controller: 'quizCtrl',
                resolve: {
                    orderImages: function (quizService) {
                        return quizService.getQuiz();
                    }
                }
            })

            .when('/userChoices',
            {
                templateUrl: 'views/userAnswer-view.html',
                controller: 'userCtrl'
            })

            .otherwise({
                redirectTo: '/'
            });
    });