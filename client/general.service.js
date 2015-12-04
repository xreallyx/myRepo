angular.module("roberto").factory('GeneralSrv',function($resource){
	//business logic
	var Data = $resource('/api/contacts/:action/:code', {
    action: '@action',
    code: '@code',
 
  	});
	var save = function(user, callback){
		callback = callback || angular.noop;
		return Data.save(user, function(user){
			return callback();
		}).$promise;
	};
	//public api
	return{
		save:save,
	}
}); 
	
