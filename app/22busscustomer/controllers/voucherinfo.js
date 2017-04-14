module.exports = function($scope, $state, $uibModalInstance, code, voucherinfo,toaster){


	voucherinfo.get({'order_code' : code}, function(res){

        console.log(res);

        if(res.errcode === 0)
        {
            $scope.objs = res.data;
            console.log(res.data);
        }
        else
        {
            toaster.success({title:"",body:res.errmsg});
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