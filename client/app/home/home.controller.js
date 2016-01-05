angular.module('roberto').controller('HomeCtrl', function($scope, GeneralSrv) {
    
   $scope.GeneralSrv = GeneralSrv;
   
$scope.send = function(weapon){
    GeneralSrv.save(weapon
    ).then(
        function(){
        alert('Your data has been sent!');
    }
    ).catch(         
        function(){
            console.log("ERROR!");
    }
    );
	};

    
});