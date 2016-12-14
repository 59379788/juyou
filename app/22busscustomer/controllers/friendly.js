module.exports = function($scope, $state, $stateParams, $uibModal){
  $scope.loveactionapply = function () {
    alert('ssss');
    $state.go('app.applyuserlist');
  }

  $scope.lovedonateapply = function() {
  	$state.go('app.loveactionlist');
  }

};