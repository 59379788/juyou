module.exports = function($scope, $state, $stateParams, $uibModal){
  $scope.seelist = function () {
    $state.go('app.instructionlist');
  }

  $scope.saveinstruction = function() {
    $state.go('app.addinstruction');
  }

};