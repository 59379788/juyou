module.exports = function($scope, $state, obj, $uibModalInstance, trackinfo){

    console.log({'seller_code' : obj.seller_code});

    trackinfo.get({'seller_code' : obj.seller_code}, function(res){

        console.log(res);



    });

    // $scope.obj = {};
    // $scope.obj.company_code = obj.seller_code;
    // $scope.obj.balance_price = 0;

    // $scope.ok = function () {
    //     console.log($scope.obj);
    //     recharge.save($scope.obj, function(res){

    //         console.log(res);

    //         if(res.errcode === 0)
    //         {
    //             alert('充值成功');
    //             $uibModalInstance.close();
    //         }
    //         else
    //         {
    //           alert(res.errmsg);
    //         }

    //     });
        
    // };

    // $scope.cancel = function () {
    //   $uibModalInstance.dismiss('cancel');
    // };
    
};