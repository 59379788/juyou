module.exports = function($scope, $state, obj, update, $uibModalInstance){

    $scope.obj = {};
    $scope.obj = obj;
    $scope.obj.loan_limit_price = 0;
    $scope.obj.picket_line = 0;
    $scope.obj.prestore_state = 0;
    $scope.obj.company_code = obj.seller_code;
    
    $scope.ok = function () {
        console.log($scope.obj);
        console.log(1111111111);
        console.log($scope.obj.send_sms_flag);
        console.log(2222222222);
        if ($scope.obj.send_sms_flag == 1) {
            if(!(/^(1[34578]\d{9},)*1[34578]\d{9}$/.test($scope.obj.send_sms_mobile))){ 
            alert("手机号码有误，请重填");  
            return ; 
            };
        }else if($scope.obj.send_sms_flag != 0) {
            alert("请选择是否发送短信提示");
            return ;
        }

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