var myApp = angular.module('myApp', ['ngRoute', 'ngMessages', 'ngCookies']); //global value now

//this is how to navigate between partials
myApp.config(function ($routeProvider){
	$routeProvider
    .when('/',{
        templateUrl: 'partials/login.html',
        controller: 'loginController',
    })

    .when('/dashboard',{
    	templateUrl: 'partials/dashboard.html',
    	controller: 'dashboardController',
    })
    
    .when('/appointment',{
        templateUrl: 'partials/appointment.html',
        controller: 'appointmentController', 
    })

	.otherwise({
		redirectTo: '/'
	})
});


