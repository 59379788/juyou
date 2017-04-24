module.exports = function($scope, $stateParams, $state, $uibModal, $uibModalInstance, ITEMS_PERPAGE,FileUploader,code, saveLimit,toaster){  
    $scope.info = {
        'company_code' : code,
        'limits' : ''

    }
    $scope.ok = function(){
        saveLimit.save($scope.info,function(res){
            console.log($scope.info);
            if(res.errcode != 0){
                toaster.success({title: "", body:res.errmsg});
                return;
            }
            console.log(res);
            $uibModalInstance.close();
        })
    }
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};