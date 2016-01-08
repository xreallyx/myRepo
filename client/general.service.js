angular.module("roberto").factory('GeneralSrv',function($resource){
	//business logic

	var Data = $resource('/api/weapons/:action/:code', {
	    action: '@action', //typology of parameter
	    code: '@code' //parameter
	},{
	take: {
		isArray: false,
		method: 'GET'
		},
	takeOne:{
		isArray: false,
		method: 'GET'
	},
  	});


	var save = function(weapon , callback){
		callback = callback || angular.noop;
		return Data.save(weapon, function(weapon){
			return callback();
		}).$promise;
	};

	
	var take = function(params, callback){
		callback = callback || angular.noop;
		return Data.get(params, function(weapon){
		
			return callback(weapon);	
		}, function(err){
			return callback(err);	
		
		}).$promise;
	};
	
	var takeOne = function(params, callback){
		callback = callback || angular.noop;
		
		return Data.get(params, function(weapon){
		console.log("sto al service")
			return callback(weapon);	
		}, function(err){
			return callback(err);	
		
		}).$promise;
	};
	



	//public api
	return{
		save:save,
		take:take,
		takeOne:takeOne,
		
	};
}); 
	
