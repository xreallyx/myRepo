angular.module('roberto').controller('ListCtrl', function($scope, GeneralSrv, $state){

console.log("This is the custom data" + $state.current.data.foo);    

$scope.GeneralSrv = GeneralSrv;

$scope.fsearch = function(){
    GeneralSrv.take().then(
        function(weapon){

            $scope.weapons=weapon;
            $scope.flag=false;
            $scope.tflag=false;
            $scope.sflag=true;
           
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
            // console.log(weapon);
            if(weapon.name === "fake"){
                alert("This weapon is not in the DB");
            }else{
                $scope.weapon=weapon;
                $scope.flag=true;
                $scope.sflag=false;}
        }).catch(
            function(){
               console.log("Weapon nominated not arrived!"); 
            }
        );
};
$scope.remove = function(weaponName){
   var flag = false;
   $scope.flag=flag;
   alert("Weapon correctly deleted");
    GeneralSrv.remove({code: weaponName}).then(
        function(){
           
            console.log("Weapon correctly deleted");
           
        }).catch(
            function(){
                console.log("Can't remove this weapon!");
            });
};
$scope.showUP = function(tflag){
        if($scope.sflag === true){
            $scope.sflag = false;
    		tflag = true;
    		$scope.tflag=tflag;
    		GeneralSrv.move();
        }else{
            tflag = true;
    		$scope.tflag=tflag;  
    		GeneralSrv.move();
        }
	};

$scope.close = function(){
    $(document).ready(function(){
        $("#toast").animate({right: '-100'},1000);
        $scope.tflag=false;
    });
};

$scope.update = function(weaponName){
    // console.log(weapon);
    GeneralSrv.update(weaponName).then(
        function(weapon){
            console.log("Weapon updated!");
            $scope.weapon=weapon;
        }).catch(
            function(){
                console.log("Impossible updated weapon");
            });
};

});