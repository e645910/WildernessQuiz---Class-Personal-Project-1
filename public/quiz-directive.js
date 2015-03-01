var app = angular.module("app", []);
app.run(function ($rootScope) {
    $rootScope.survey = [];
});

app.directive('surveyCheckbox', function ($rootScope) {
    return {
        restrict: 'E',
        require: '^ngModel',
        transclude: true,
        scope: {
   			ngModel: '@',
   			quizQuestions: '=questions'
			}
        template: '<br />{{ngModel}}<br /><label ng-repeat="quizQuestion in quizQuestions" class="checkbox"><input data-role="none" type="checkbox" name="selectedExclusion[]" value="{{quizQuestion.value}}" ng-checked="quizAnswers.indexOf(quizQuestion.value) > -1" ng-click="togglesurveyAnswers(quizQuestion.value)"> {{quizQuestion.name}} <br /></label>{{quizAnswers}}',
        link: function (scope, elem, attr) {
            // selected exclusion
            scope.quizAnswers = [];

            // toggle quizAnswers for a given answer by name
            scope.togglesurveyAnswers = function togglesurveyAnswers(quizQuestion) {
                var idx = scope.quizAnswers.indexOf(quizQuestion);

                // is currently selected
                if (idx > -1) {
                    scope.quizAnswers.splice(idx, 1);
                }
                // is newly selected
                else {
                    scope.quizAnswers.push(quizQuestion);
                }
            };
            $rootScope.survey.push(angular.copy(scope.quizAnswers));
        }
    };
});


