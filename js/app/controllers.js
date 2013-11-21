/* Init controllers */

var datapleaseControllers = angular.module('datapleaseControllers', []);

/* Controller - Region */

datapleaseApp.controller('RegionCtrl', ['$scope', '$routeParams', 'Data', function ($scope, $routeParams, Data){
	
	$scope.region = Data.getRegion({ regionId:$routeParams.regionSlug });	

}])