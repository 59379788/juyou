module.exports = function($scope, $state, $stateParams, $uibModal){
  $scope.changeapplylist = function () {
    $state.go('app.changelist');
  }

  $scope.addgoods = function() {
  	$state.go('app.goodsforyou');
  }

  $scope.addgoodtype = function() {
  	$state.go('app.addgoodtype');
  }

};