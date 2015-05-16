angular.module('wildernessQuiz')
.service('questionService', function($q, $http){
	this.postQuestion = function(question, answer, badAnswer1, badAnswer2, badAnswer3, supportData, image){
	    var dfd = $q.defer();
      	$http({
	        method: 'POST',
	        url: '/api/postQuestion',
	        data: {
	          	question: question,
	          	answer: answer,
	          	badAnswer1: badAnswer1,
	          	badAnswer2: badAnswer2,
	          	badAnswer3: badAnswer3,
	          	supportData: supportData,
	          	image: image
	        }
	    })
	    .success(function(response){
	        dfd.resolve(response);
	    })
	    .catch(function(err){
	        dfd.reject(err);
	    });
	   return dfd.promise;
	};

	var updateIndex = 0;
	var updateArray = []
	var arrayLength;

this.getQuestion = function(){
		var dfd = $q.defer();
	    $http({
		    method: 'GET',
		    url: '/api/getQuestion'
	    })
	    .then(function(response){
	    	updateArray = response.data[updateIndex];
	    	arrayLength = response.data.length;
			console.log(11111111, updateIndex)
	        dfd.resolve(updateArray);
	    });
	    return dfd.promise;  
	};

this.nextUpdate = function(){
		var dfd = $q.defer();
	    $http({
		    method: 'GET',
		    url: '/api/getQuestion'
	    })
	    .then(function(response){
	    	//updateIndex++
	  //   	if(updateIndex < arrayLength - 1){
	  // 			updateIndex++};
			// }
	    	updateArray = response.data[updateIndex];
	    	arrayLength = response.data.length;
			console.log(333333333, updateIndex)
	        dfd.resolve(updateArray);
	    });
	    return dfd.promise;  
	};
});