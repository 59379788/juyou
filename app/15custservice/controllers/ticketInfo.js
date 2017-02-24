module.exports = function ($scope, id, $uibModalInstance, getinfobyid) {

	$scope.id = id;
	$scope.obj = {};

	getinfobyid.save({'id' : $scope.id}, function (res) {

		console.log(res);

		if (res.errcode == 0) {
			$scope.obj = res.data;
			$scope.obj.pay_fee = $scope.obj.pay_fee * 0.01;
		} else {
			alert(res.errmsg);
		}

	});

	$scope.ok = function () {
		//alert('ok');
		$uibModalInstance.close();
	};

	$scope.cancel = function () {
		$uibModalInstance.close();
	}

};