module.exports = function($scope, $uibModalInstance, insertCard){

	$scope.obj = {};

	$scope.cancel = function(){

		$uibModalInstance.close();

	}

	$scope.gogo = function(){

		if($scope.obj.startcard === undefined || $scope.obj.startcard == '')
		{
			alert('请输入起始卡号！');
			return;
		}

		if($scope.obj.endcard === undefined || $scope.obj.endcard == '')
		{
			alert('请输入结束卡号！');
			return;
		}

		if($scope.obj.startcard.length != 12 || $scope.obj.endcard.length != 12)
		{
			alert('位数错误！');
			return;
		}

		insertCard.save($scope.obj, function(res){

			if(res.errcode === 0)
			{
				alert('添加成功');
				$uibModalInstance.close();
			}
			else
			{
				alert(res.errmsg);
			}

		});

	}



};