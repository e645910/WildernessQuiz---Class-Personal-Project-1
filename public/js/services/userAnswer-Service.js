angular.module('wildernessQuiz')
.service('userService', function($q, $http){
	this.getUserInfo = function(Data, selections, userId){
		console.log(5555555, Data, userId)
		var dfd = $q.defer();
	$http({
		method: 'GET',
		url: '/api/getAnswer'// + "?quizInstanceId=" + Data + "&userId=" + userId
	})
	.then(function(response){
		var selections = response.data;
		console.log(66666666, selections)
		dfd.resolve(response);
	},
	function(err){
		dfd.reject(err);
	});
	return dfd.promise;
	};
	// function correctUserChoices(selections){
	// 	var correctChoices = []
	// 	for(var i = 0; i < selections.length; i++){
	// 		if(selections[i] === 'CORRECT'){
	// 			correctUserChoices.push(selections[i])
	// 			console.log(correctUserChoices)
	// 		}
	// 	}
	// };
	// correctCount(selections); 
	// console.log(88888888, selections)
});