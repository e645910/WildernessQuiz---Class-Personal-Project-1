angular.module('wildernessQuiz')
.service('questionService', function($q, $http){
	this.saveQuestion = function(question, answer, badAnswer1, badAnswer2, badAnswer3, supportData, image){
	    var dfd = $q.defer();
      	$http({
	        method: 'POST',
	        url: '/api/saveQuestion',
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

	this.getQA = function(){
		var dfd = $q.defer();
	    $http({
		    method: 'GET',
		    url: '/api/getQuestion'
	    })
	    .then(function(response){
	    	updateArray = response.data[updateIndex];
	    	arrayLength = response.data.length;
	        dfd.resolve(updateArray);
	    });
	    return dfd.promise;  
	};

	this.updateQA = function(_id, question, answer, badAnswer1, badAnswer2, badAnswer3, supportData, image){
		console.log(3333333333, _id, question, answer, badAnswer1, badAnswer2, badAnswer3, supportData, image)
	    var dfd = $q.defer();
      	$http({
	        method: 'PUT',
	        url: '/api/updateQuestion',
	        data: {
	        	_id: _id,
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
	    	console.log(1111111111, response)
	        dfd.resolve(response);
	    })
	    .catch(function(err){
	        dfd.reject(err);
	    });
	   return dfd.promise;
	};

	this.getNextQA = function(){
		var dfd = $q.defer();
	    $http({
		    method: 'GET',
		    url: '/api/getQuestion'
	    })
	    .then(function(response){
	    	(updateIndex < arrayLength - 1) ? updateIndex++: alert('No more records to update!');
	  		updateArray = response.data[updateIndex];
	        dfd.resolve(updateArray);
	    });
	    return dfd.promise;  
	};
});