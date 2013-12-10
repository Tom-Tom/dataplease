/* Init app */
var datapleaseApp = angular.module('datapleaseApp', 
	['ngRoute', 'datapleaseControllers', 'datapleaseServices']
);

var configApi = {
	base: 'http://datacities.herokuapp.com',
	slug_regions: 'region',
	slug_departments: 'departement',
	slug_cities: 'commune'
}

/* Config app */
datapleaseApp.config(['$routeProvider', function ($routeProvider){

	$routeProvider
	.when('/', {
			templateUrl: 'templates/welcome.html',
			controller: 'SearchCtrl'
		})
	.when('/region', {
			templateUrl: 'templates/data.html',
			controller: 'RegionsAllCtrl'
		})
	.when('/region/:regionSlug', {
			templateUrl: 'templates/data.html',
			controller: 'RegionCtrl'
		})
	.when('/departement', {
			templateUrl: 'templates/data.html',
			controller: 'DepartmentsAllCtrl'
		})
	.when('/departement/:departmentSlug', {
			templateUrl: 'templates/data.html',
			controller: 'DepartmentCtrl'
		})
	.when('/commune', {
			templateUrl: 'templates/data.html',
			controller: 'DepartmentsAllCtrl'
		})
	.when('/commune/:citySlug', {
			templateUrl: 'templates/data.html',
			controller: 'CityCtrl'
		})
	.otherwise({
		redirectTo: '/lol'
	});
}])
