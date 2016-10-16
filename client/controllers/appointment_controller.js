myApp.controller('appointmentController', function ($scope, $location,$routeParams,$cookies,appointmentFactory){

	//CURRENT USER SECTION - this section to read from session cookie the current user info
	//In user_factory I put/set the current user cookie, I call it here an dable to use it

	var currentUser = $cookies.getObject('user');
	//binding the currentUser so you can see it in the front page
	$scope.currentUser = currentUser;

	//Cancel button - redirect back to prevouse page in this case was dashboard
	$scope.cancel = function(){
		$location.url('/dashboard');
	};

	//submit button, adding new answer
	$scope.appointmentCreate = function(){
		console.log('inside appointmentController')
		$scope.newA.patient = $scope.currentUser.name;
		$scope.newA.patientID = $scope.currentUser._id;
		//note to self, make sure adding the factory in the first line to include it
		appointmentFactory.create($scope.newA, function(){
            $location.url('/dashboard');
		})
	};

})