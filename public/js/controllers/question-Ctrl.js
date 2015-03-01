var app = angular.module('wildernessQuiz')
.controller('questCtrl', function($scope, question) {
 	$scope.question = question;
 });