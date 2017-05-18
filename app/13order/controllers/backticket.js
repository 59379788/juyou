module.exports = function ($scope, $uibModalInstance, code, num, createBackOrder) {

	$scope.obj = {};
	$scope.obj.order_code = code;


	$scope.cancel = function () {

		$uibModalInstance.close();

	}

	$scope.gogo = function () {

		if ($scope.obj.back_count === undefined || $scope.obj.back_count == '') {
			alert('退票数量不能为空');
			return;
		}

		if ($scope.obj.back_count > num) {
			alert('退票数量不能大于购买数量');
			return;
		}

		createBackOrder.save($scope.obj, function (res) {

			if (res.errcode === 0) {
				if(res.data.result == '1'){
					alert('退票成功');
				} else if(res.data.result == '2') {
					alert('退票申请已提交，待审核');
				} else if(res.data.result == '3') {
					alert(res.data.remark_err);
				}
				$uibModalInstance.close();
			}
			else {
				alert(res.errmsg);
			}

		});

	}



};