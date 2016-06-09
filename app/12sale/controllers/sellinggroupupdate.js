module.exports = function($scope, $state, $uibModalInstance, code, groupsalelist, groupone, update, updatedetail, userinfo){

	$scope.groupobj = {};
	$scope.groupobjstate = 0;

	var name;

	groupsalelist().then(function(res) {
		console.log(res);
        if(res.errcode === 0)
        {
        	$scope.salearr = res.data;
        	$scope.groupobj.sale_code = $scope.salearr[0].code;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    userinfo().then(function(res) {
		name = res.name;
    });

    groupone.get({'code' : code}, function(res){
		console.log(res.data);
        if(res.errcode === 0)
		{
			$scope.groupobj = res.data;
		}
		else
		{
			alert(res.errmsg);
		}

    });

    //保存
	$scope.gogo = function(){

		if($scope.groupobj.guide_name === undefined || $scope.groupobj.guide_name == '')
		{
			alert('导游姓名不能为空');
			return;
		}

		if($scope.groupobj.guide_mobile === undefined || $scope.groupobj.guide_mobile == '')
		{
			alert('导游电话不能为空');
			return;
		}

		if($scope.groupobj.vehicle_number === undefined || $scope.groupobj.vehicle_number == '')
		{
			alert('车牌号不能为空');
			return;
		}

		$scope.groupobj.code = code;
		$scope.groupobj.username = name;
		$scope.groupobj.plan_count = $scope.groupobj.plan_count;
		update.save($scope.groupobj, function(res){

			if(res.errcode === 0)
			{
				updatedetail.save($scope.groupobj, function(res){

					if(res.errcode === 0)
					{
						alert('保存成功');
						$uibModalInstance.close();
						//$state.go('app.sellinggroup');
					}
					else
					{
						alert(res.errmsg);
					}

				});
			}
			else
			{
				alert(res.errmsg);
			}

		});
	};



};
