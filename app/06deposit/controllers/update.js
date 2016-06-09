module.exports = function($scope, $state, obj, update, $uibModalInstance){

    $scope.obj = {};
    $scope.obj.loan_limit_price = 0;
    $scope.obj.picket_line = 0;
    $scope.obj.prestore_state = 0;
    $scope.obj.company_code = obj.seller_code;
    
    $scope.ok = function () {
        console.log($scope.obj);
        update.save($scope.obj, function(res){
            console.log(res);
            if(res.errcode === 0)
            {
                alert('修改成功');
                $uibModalInstance.close();
            }
            else
            {
              alert(res.errmsg);
            }
        });
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    
};