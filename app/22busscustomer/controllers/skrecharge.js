module.exports = function($scope, $stateParams, $state, $uibModal, $uibModalInstance, ITEMS_PERPAGE,FileUploader,saveRechargeIntegral,userid,toaster){  
    // var userid = $stateParams.userid;
    $scope.salelists = [];
    $scope.info = {
        'user_id' : userid,
        'transmitIntegral' : '',
        'type' : ''
    }

    
    $scope.ok = function(){
        $scope.info.transmitIntegral = parseInt($scope.info.transmitIntegral);
        saveRechargeIntegral.save($scope.info,function(res){
            console.log($scope.info);
            if(res.errcode != 0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $uibModalInstance.close();

        })
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.seepicture = function(){
        
    }
};