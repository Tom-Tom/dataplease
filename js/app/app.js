/* Init app */

var datapleaseApp = angular.module('datapleaseApp', ['ngRoute', 'datapleaseControllers', 'datapleaseServices']);

var configApi = {
	base: 'http://datacities.herokuapp.com'
}

/* Config app */

datapleaseApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider
	.when('/region', {
			templateUrl: 'templates/welcome.html',
			controller: 'RegionsAllCtrl'
		})
	.when('/region/:regionSlug', {
			templateUrl: 'templates/welcome.html',
			controller: 'RegionCtrl'
		})
	.when('/region/:regionSlug/departement', {
			templateUrl: 'templates/welcome.html',
			controller: 'DepartmentsAllCtrl'
		})
	.when('/region/:regionSlug/departement/:departmentSlug', {
			templateUrl: 'templates/welcome.html',
			controller: 'DepartmentCtrl'
		})
	.otherwise({
		redirectTo: '/lol'
	});
}])