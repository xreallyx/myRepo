
  angular.module('roberto')
    .controller('AboutmeCtrl', function($scope, GeneralSrv) {
      this.topDirections = ['left', 'up'];
      this.bottomDirections = ['down', 'right'];
      this.isOpen = false;
      this.availableModes = ['md-fling', 'md-scale'];
      this.selectedMode = 'md-fling';
      this.availableDirections = ['up', 'down', 'left', 'right'];
      this.selectedDirection = 'up';
      
      $scope.GeneralSrv = GeneralSrv;

      $scope.showLife = function(bool){
        if(bool == false)
        {
          $scope.boolLife = true;
          $scope.boolSkills = false;
        }
        else{
          $scope.boolLife = false;
        }

      };
      $scope.showSkills = function(bool){
        if(bool == false)
        {
          $scope.boolSkills = true;
          $scope.boolLife = false;
        }else{
          $scope.boolSkills = false;

        }
      };
      
     });