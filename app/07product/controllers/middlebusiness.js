module.exports = function($scope, $state, $stateParams, $uibModalInstance,ITEMS_PERPAGE,middlebusiness,sale_code){
    $scope.obj = {
        'sale_code' : sale_code,
        'middle_business_code' : ''
    };
    
    $scope.ok = function () {
        if ($scope.obj.middle_business_code !== '') { 
            middlebusiness.save($scope.obj, function(res){
            console.log($scope.obj);
            if(res.errcode === 0)
            {
                alert('绑定成功');
                console.log(res);
                $uibModalInstance.close();
                
            }
            else
            {
              alert(res.errmsg);
            }
           });
        } else { 
            alert('请填写中间商编号');
            return;
        }
        
        
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
};