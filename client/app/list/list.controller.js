angular.module('roberto').controller('ListCtrl', function($scope, GeneralSrv){
    
$scope.GeneralSrv = GeneralSrv;


$scope.fsearch = function(){
    GeneralSrv.get().then(
        function(weapon){
            console.log(weapon);
            console.log("Weapons arriving!");
          /*  $scope.weaponName=weapon.name;
            $scope.weaponDescription=weapon.description;
            $scope.weaponImage=weapon.image;
            $scope.weaponAvailability=weapon.availability;*/
            $scope.weapon=weapon;
        }
    ).catch(
        function(){
            console.log("Impossible searching data!");
            
        }
    )
}; 
});