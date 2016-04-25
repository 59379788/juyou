module.exports = function($scope, $stateParams, $state, groupsalelist, groupone, update, updatedetail){

	$scope.groupobj = {};
	$scope.groupobjstate = 0;


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

    groupone.get({'code' : $stateParams.code}, function(res){
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

		if($scope.groupobj.book_count === undefined || $scope.groupobj.book_count == '')
		{
			alert('出游人数不能为空');
			return;
		}

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

		$scope.groupobj.code = $stateParams.code;
		update.save($scope.groupobj, function(res){

			if(res.errcode === 0)
			{
				updatedetail.save($scope.groupobj, function(res){

					if(res.errcode === 0)
					{
						$state.go('app.sellinggroup');
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
