angular.module('wildernessQuiz')
    .controller('userCtrl', function($scope, $rootScope, $location, userService) {
        $scope.loadUserSelection = function() {
            userService.getUserInfo(quizInstanceId, $rootScope.userId)
                .then(function(res) {
                        $scope.selections = res.answers;
                        $scope.feedback = res.feedback;
                        $scope.totalAnwers = res.totalAnswers;
                    },
                    function(err) {});
        };
        $scope.loadUserSelection();

        // give user the option to retake the quiz ========================
        $scope.retakeTestClick = function() {
            $scope.reTakeQuizPath = $location.path('/quiz');
        };
    });