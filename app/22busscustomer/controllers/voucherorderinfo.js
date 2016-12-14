module.exports = function($scope, obj){

    $scope.obj = obj;

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};