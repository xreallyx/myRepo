angular.module("roberto").factory('GeneralSrv',function($resource){
	//business logic
	var flag = 0;

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

	var timeFunc = function(){
		$(document).ready(function(){
			if(flag == 1){
				angular.noop;
			}else{
				setTimeout(function() {$("#toast").animate({"top":"96px"},500);}, 500);
				setTimeout(function() {$("#toast").animate({"top":"-96px"},1500);}, 2000);
				flag = 1;
			}
		})
	};



	//public api
	return{
		save:save,	
		timeFunc:timeFunc,
		
	}
}); 
	
