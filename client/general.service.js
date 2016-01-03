angular.module("roberto").factory('GeneralSrv',function($resource){
	//business logic


	var Data = $resource('/api/weapons/:action/:code', {
    action: '@action',
    code: '@code',
 
  	});


	var save = function(weapon , callback){
		callback = callback || angular.noop;
		return Data.save(weapon, function(weapon){
			return callback();
		}).$promise;
	};



	//public api
	return{
		save:save,
		
	}
}); 
	
