angular.module('roberto').controller('ListCtrl', function($scope, GeneralSrv){
    
$scope.GeneralSrv = GeneralSrv;


$scope.fsearch = function(){
    GeneralSrv.take().then(
        function(weapon){
            console.log("Weapons arriving!");
            $scope.weapons=weapon;
        }
    ).catch(
        function(){
            console.log("Impossible get weapons!");
            
        }
    )
}; 
});