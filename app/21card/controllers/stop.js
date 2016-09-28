module.exports = function($scope, $state, obj, recharge, $uibModalInstance, balance){

    console.log(obj);

    $scope.obj = {};
    $scope.obj.company_code = obj.seller_code;
    $scope.obj.balance_price = 0;

    $scope.balance = balance;

    $scope.ok = function () {
        console.log($scope.obj);
        recharge.save($scope.obj, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                alert('充值成功');
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