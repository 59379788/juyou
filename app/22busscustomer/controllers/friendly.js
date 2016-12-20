module.exports = function($scope, $state, $stateParams, $uibModal){
  $scope.loveactionapply = function () {
    $state.go('app.applyuserlist');
  }

  $scope.lovedonateapply = function() {
  	$state.go('app.loveactionlist');
  }

};