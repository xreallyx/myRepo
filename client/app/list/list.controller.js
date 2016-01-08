angular.module('roberto').controller('ListCtrl', function($scope, GeneralSrv, $state){
    
console.log("This is the custom data" + $state.current.data.foo);    

$scope.GeneralSrv = GeneralSrv;


$scope.fsearch = function(){
    GeneralSrv.take().then(
        function(weapon){
            $scope.weapons=weapon;
        }
    ).catch(
        function(){
            console.log("Impossible get weapons!");
        }
    );
}; 

$scope.fsearchOne = function(weaponName){
 
    GeneralSrv.takeOne({code: weaponName}).then(
        function(weapon){
            console.log(weapon);
            console.log("Weapon nominated is arriving!");
            $scope.weapon=weapon;
            var flag = true;
            $scope.flag=flag;
        }).catch(
            function(){
               console.log("Weapon nominated not arrived!"); 
            }
        );
};
});