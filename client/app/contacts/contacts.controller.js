angular.module('roberto').controller('ContactsCtrl', function($scope, GeneralSrv){
	   
$scope.GeneralSrv = GeneralSrv;

$scope.send = function(user){
    GeneralSrv.save(user
    ).then(
        function(){
        console.log("i dati sono stati salvati sul DB");
        alert('Your request was successful!');
    }
    ).catch(         
        function(){
        console.log("ERROR!");
    }
    )
	};
});