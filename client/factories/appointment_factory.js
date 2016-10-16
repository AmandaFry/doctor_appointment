myApp.factory('appointmentFactory', function($http){
	var factory={}; //create an initial jason to store data

	factory.create = function(newA, callback){
		$http.post('/new_appointment', newA).success(function(data){
			callback();
		});
	};


	return factory;// make sure I return the result
});