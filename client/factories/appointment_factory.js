myApp.factory('appointmentFactory', function($http,$cookies){
	var factory={}; //create an initial jason to store data

	factory.create = function(newA, callback){
		console.log("inside appointmentFactory")
		console.log(newA)
		$http.post('/new_appointment', newA).success(function(data){
			callback();
		});
	};


	return factory;// make sure I return the result
});