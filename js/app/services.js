/* Init services */

var datapleaseServices = angular.module('datapleaseServices', ['ngResource']);

/* Service - GET API */

datapleaseServices.factory('Data', ['$resource', function ($resource){
	return $resource(configApi.base, {}, 
		{ 	
			getAllRegions: {
				method:'GET',
			    isArray:true,
			    url: configApi.base+'/region'
			},
			getRegion: {
				method:'GET',
				params:{regionId:':regionId'},
			    isArray:false,
			    url: configApi.base+'/region/:regionId'
			},
			getAllDepartments: {
				method:'GET',
				params:{regionId:':regionId'},
			    isArray:true,
			    url: configApi.base+'/region/:regionId/departement'
			},
			getDepartment: {
				method:'GET',
				params:{regionId:':regionId', departmentId:':departementId'},
			    isArray:false,
			    url: configApi.base+'/region/:regionId/departement/:departmentId'
			}
		}
	);
}]);