/* Init controllers */

var datapleaseControllers = angular.module('datapleaseControllers', []);

/* Controllers */

datapleaseApp.controller('SearchCtrl', ['$scope', '$routeParams', 'Data', '$location', function ($scope, $routeParams, Data, $location){

	$scope.submit = function (){

		var	what = this.query.what,
			where = this.query.where,
			when = this.query.when;
		
		$location.path('/commune/'+where).hash(what);
		
	}

}])


datapleaseApp.controller('RegionsAllCtrl', ['$scope', '$routeParams', 'Data', function ($scope, $routeParams, Data){
	$scope.data = Data.getAllRegions();
}])

datapleaseApp.controller('RegionCtrl', ['$scope', '$routeParams', 'Data', function ($scope, $routeParams, Data){
	$scope.data = Data.getRegion({ regionSlug:$routeParams.regionSlug });	
}])


datapleaseApp.controller('DepartmentsAllCtrl', ['$scope', '$routeParams', 'Data', function ($scope, $routeParams, Data){
	$scope.data = Data.getAllDepartments();
}])

datapleaseApp.controller('DepartmentCtrl', ['$scope', '$routeParams', 'Data', function ($scope, $routeParams, Data){	
	$scope.data = Data.getDepartment({ departmentSlug:$routeParams.departmentSlug });	
}])


datapleaseApp.controller('CitiesAllCtrl', ['$scope', '$routeParams', 'Data', function ($scope, $routeParams, Data){
	$scope.data = Data.getAllCities();
}])

datapleaseApp.controller('CityCtrl', ['$scope', '$routeParams', 'Data', '$location', function ($scope, $routeParams, Data, $location){

	var params = { 
		citySlug:$routeParams.citySlug
	};

	$scope.data = Data.getCity(params);

	if($location.hash()){
		params['dataId'] = $location.hash();
		Data.getCity(params, function(output){
			console.log(output);
			$scope.data.resultKey = params['dataId'];
			$scope.data.resultValue = output[0][params['dataId']];
		});
	}

	

	//console.log($location.search(), $location.hash());
}])





