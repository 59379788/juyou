module.exports = function($scope, $state, $uibModalInstance, id, back_price, orderback){

	$scope.obj = {};
	$scope.obj.id = id;
	$scope.obj.back_price = back_price * 0.01;


	$scope.cancel = function(){

		$uibModalInstance.close();

	}

	$scope.gogo = function(){

		if($scope.obj.back_price === undefined || $scope.obj.back_price == '')
		{
			alert('退款金额不能为空');
			return;
		}

		orderback.save($scope.obj, function(res){

			if(res.errcode === 0)
			{
				alert('退款成功');
				$uibModalInstance.close();
			}
			else
			{
				alert(res.errmsg);
			}

		});

	}



};