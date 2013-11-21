/* Init controllers */

var datapleaseControllers = angular.module('datapleaseControllers', []);

/* Controllers */

datapleaseApp.controller('RegionsAllCtrl', ['$scope', '$routeParams', 'Data', function ($scope, $routeParams, Data){
	
	$scope.data = Data.getAllRegions();

}])

datapleaseApp.controller('RegionCtrl', ['$scope', '$routeParams', 'Data', function ($scope, $routeParams, Data){
	
	$scope.data = Data.getRegion({ regionId:$routeParams.regionSlug });	

}])

datapleaseApp.controller('DepartmentsAllCtrl', ['$scope', '$routeParams', 'Data', function ($scope, $routeParams, Data){
	
	$scope.data = Data.getAllDepartments({ regionId:$routeParams.regionSlug });

}])

datapleaseApp.controller('DepartmentCtrl', ['$scope', '$routeParams', 'Data', function ($scope, $routeParams, Data){
	
	$scope.data = Data.getDepartment({ regionId:$routeParams.regionSlug, departmentId:$routeParams.departmentSlug });	

}])