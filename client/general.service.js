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

	
	var get = function(params, callback){
		callback = callback || angular.noop;
		
		return Data.get(params, function(weapon){
			console.log(weapon);
			return callback(weapon);	
		}, function(err){
			return callback(err);	
		
		}).$promise;
	};



	//public api
	return{
		save:save,
		get:get,
		
	};
}); 
	
