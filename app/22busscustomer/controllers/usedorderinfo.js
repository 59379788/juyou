module.exports = function($scope, obj, $uibModalInstance){

    $scope.obj = obj;

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};