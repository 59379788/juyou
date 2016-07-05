module.exports = function($scope, $uibModalInstance, code, relay, sale_belong, getRedCorridorResentMsg){

	$scope.obj = {};
	$scope.obj.code = code;


	$scope.cancel = function(){

		$uibModalInstance.close();

	}

	$scope.gogo = function(){

		/*var fun;

        if(sale_belong === 'juyou')
        {
            fun = relay;
        }
        else
        {
            fun = getRedCorridorResentMsg;
        }*/

		if($scope.obj.mobile === undefined || $scope.obj.mobile == '')
		{
			alert('手机号码不能为空');
			return;
		}

		if($scope.obj.mobile.length != '11')
		{
			alert('手机号码位数错误');
			return;
		}

		relay.save($scope.obj, function(res){

			if(res.errcode === 0)
			{
				alert('转发成功');
				$uibModalInstance.close();
			}
			else
			{
				alert(res.errmsg);
			}

		});

	}



};