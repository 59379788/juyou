module.exports = function($scope, $state, $uibModalInstance, id, back_price, orderback){

	$scope.obj = {
		'remark' : '  '
	};
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
		} else if($scope.obj.remark == ''){
			alert('退款说明不能为空');
			return;
		}
		$scope.obj.back_price = $scope.obj.back_price*100;
		console.log('$scope.obj');
		console.log($scope.obj);
		orderback.save($scope.obj, function(res){

			if(res.errcode === 0)
			{
				alert('退款成功');
				$uibModalInstance.close();
			}
			else
			{
				$scope.obj.back_price = $scope.obj.back_price*0.01;
				alert(res.errmsg);
			}

		});

	}



};