/* Init controllers */

var datapleaseControllers = angular.module('datapleaseControllers', []);

/* Controllers */

datapleaseApp.controller('SearchCtrl', ['$scope', '$routeParams', 'Data', '$location', function ($scope, $routeParams, Data, $location){

	$scope.submit = function (){

		var	what = this.query.what,
			where = this.query.where,
			when = this.query.when;
		
		$location.path('/city/'+where).hash(what);
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

	if($location.hash()){
		params['dataId'] = $location.hash();
	}

	$scope.data = Data.getCity(params);

	$scope.data.$promise.then(function(d){

		var dataType = ["chomage",
		"demoEntreprises",
		"diplomesFormation",
		"emploiPopActive",
		"emploi",
		"entreprisesEtablissement",
		"famille",
		"impots",
		"logement",
		"revenusMenage",
		"salaire",
		"structurePopulation"];

		for(i in dataType){
		    var type = dataType[i];
		    for(k in $scope.data[type]){
		        $scope.data[k] = $scope.data[type][k];
		    }
		    delete $scope.data[type];
		}

	});

	if(params['dataId']){
		console.log(params['dataId']);
		Data.getCity(params, function(output){
			// console.log(output);
			$scope.data = output[params['dataId']];
		});
	}

	//console.log($location.search(), $location.hash());

}])






