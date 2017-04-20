module.exports = function($scope, $stateParams, $state, $uibModal, $uibModalInstance, ITEMS_PERPAGE,FileUploader,id, saveLimit,toaster){  
    $scope.info = {
        'num' : ''
    }
    $scope.limit = function(){
        
    }
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};