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
				params:{regionId:':regionSlug'},
			    isArray:false,
			    url: configApi.base+'/region/:regionSlug'
			},
			getAllDepartments: {
				method:'GET',
				params:{regionId:':regionSlug'},
			    isArray:true,
			    url: configApi.base+'/region/:regionSlug/departement'
			},
			getDepartment: {
				method:'GET',
				params:{regionId:':regionSlug', departmentSlug:':departementSlug'},
			    isArray:false,
			    url: configApi.base+'/region/:regionSlug/departement/:departmentSlug'
			}
		}
	);
}]);