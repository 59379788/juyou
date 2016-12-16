module.exports = function($scope, $state, $uibModalInstance, code, voucherinfo){


	voucherinfo.get({'order_code' : code}, function(res){

        console.log(res);

        if(res.errcode === 0)
        {
            $scope.objs = res.data;
        }
        else
        {
            alert(res.errmsg);
        }

    });

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.usedinfo = function(code) {
	  	$state.go('app.usedorderlist', {'code' : code});
	  	$uibModalInstance.dismiss('cancel');
	}





};