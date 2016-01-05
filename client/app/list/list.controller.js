angular.module('roberto').controller('ListCtrl', function($scope, GeneralSrv){
    
$scope.GeneralSrv = GeneralSrv;
   	
$scope.fsearch = function(){
    GeneralSrv.get().then(
        function(){
            console.log("Weapons arriving!")
            
        }
    ).catch(
        function(){
            console.log("Impossible searching data!");
            
        }
    )
}; 
});