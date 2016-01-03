angular.module('roberto').controller('HomeCtrl', function($scope, GeneralSrv) {
    
   $scope.GeneralSrv = GeneralSrv;
   
$scope.send = function(weapon){
    GeneralSrv.weapon(weapon
    ).then(
        function(){
        console.log("i dati sono stati salvati sul DB");
        alert('Your request was successful!');
    }
    ).catch(         
        function(){
        console.log("ERROR!");
    }
    );
	};
    
});