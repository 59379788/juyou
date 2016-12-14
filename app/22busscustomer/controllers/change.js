module.exports = function($scope, $state, $stateParams, $uibModal){
  $scope.loveactionapply = function () {
    alert('ssss');
    $state.go('app.applyuserlist');
  }

  $scope.addgoods = function() {
  	$state.go('app.goodsforyou');
  }

  $scope.addgoodtype = function() {
  	alert('leixing');
  	$state.go('app.addgoodtype');
  }

};