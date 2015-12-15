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

	var timeFunc = function(flag){
	//	console.log("yes");
	//	setTimeout(function() {				
	//	flag = !flag;	
	//	console.log(flag);	
	//	return flag;	
	//	}, 2000);
	$(document).ready(function(){
		
		setTimeout(function() {$("#toast").animate({"top":"96px"});}, 500);
	})
	};
	//public api
	return{
		save:save,	
		timeFunc:timeFunc,
	}
}); 
	
