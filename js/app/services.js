/* Init services */

var datapleaseServices = angular.module('datapleaseServices', ['ngResource']);

/* Service - GET API */

datapleaseServices.factory('Data', ['$resource', function ($resource){
	return $resource(configApi.base, {}, 
		{ 	
			getRegion: {
				method:'GET',
				params:{regionId:':regionId'},
			    isArray:false,
			    url: configApi.base+'/region/:regionId'
			}
		}
	);
}]);