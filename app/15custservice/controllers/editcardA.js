module.exports = function($scope, $uibModalInstance, cardnum, updateCardPass){

	$scope.obj = {};
	$scope.obj.card_num = cardnum;


	$scope.cancel = function(){

		$uibModalInstance.close();

	}

	$scope.gogo = function(){

		updateCardPass.save($scope.obj, function(res){

			if($scope.obj.card_password === undefined || $scope.obj.card_password == '')
			{
				alert('新卡密不能为空');
				return;
			}

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

	}



};