/**
 * 模态框
 */
module.exports = function ($scope, $state, $resource, $stateParams, $uibModalInstance, $http) {

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};