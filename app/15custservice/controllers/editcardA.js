module.exports = function($scope, $uibModalInstance, cardnum, updateCardPass){

	$scope.obj = {};
	$scope.obj.cardnum = cardnum;


	$scope.cancel = function(){

		$uibModalInstance.close();

	}

	$scope.gogo = function(){

		updateCardPass.save($scope.obj, function(res){

			if($scope.obj.cardpass === undefined || $scope.obj.cardpass == '')
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