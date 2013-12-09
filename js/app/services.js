/* Init services */

var datapleaseServices = angular.module('datapleaseServices', ['ngResource']);

/* Service - GET API */

datapleaseServices.factory('Data', ['$resource', function ($resource){
	return $resource(configApi.base, {}, 
		{ 	
			getAllRegions: {
				method:'GET',
			    isArray:true,
			    url: configApi.base+'/'+configApi.slug_regions
			},
			getRegion: {
				method:'GET',
				params:{regionSlug:':regionSlug'},
			    isArray:false,
			    url: configApi.base+'/'+configApi.slug_regions+'/:regionSlug'
			},
			getAllDepartments: {
				method:'GET',
			    isArray:true,
			    url: configApi.base+'/'+configApi.slug_departments
			},
			getDepartment: {
				method:'GET',
				params:{departmentSlug:':departementSlug'},
			    isArray:false,
			    url: configApi.base+'/'+configApi.slug_departments+'/:departmentSlug'
			},
			getAllCities: {
				method:'GET',
			    isArray:true,
			    url: configApi.base+'/'+configApi.slug_cities
			},
			getCity: {
				method:'GET',
				params:{citySlug:':citySlug', dataId:':dataId'},
			    isArray:true,
			    url: configApi.base+'/'+configApi.slug_cities+'/commune/:citySlug?orderParam=list'
			}
		}
	);
}]);