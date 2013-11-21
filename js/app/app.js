/* Init app */

var datapleaseApp = angular.module('datapleaseApp', ['ngRoute', 'datapleaseControllers', 'datapleaseServices']);

var configApi = {
	base: 'http://datacities.herokuapp.com'
}

/* Config app */

datapleaseApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider
	.when('/region/:regionSlug', {
			templateUrl: 'templates/welcome.html',
			controller: 'RegionCtrl'
		})
	.otherwise({
		redirectTo: '/lol'
	});
}])