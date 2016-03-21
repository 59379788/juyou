module.exports = function($scope){


  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };




	

};