module.exports = function($scope, $stateParams, slist, devicetype, create, $state){

	//机器id
	var placecode = $stateParams.placecode;

	$scope.lock = false;

	$scope.obj = {};
	$scope.obj.view = placecode;
	//机器类型
	$scope.typearr = devicetype;
	$scope.obj.type = $scope.typearr[0].code;

	//状态
	$scope.obj.state = '0';
	$scope.obj.del_flg = '0';
	$scope.obj.auth_state = '0';
	$scope.obj.many_state = '1';
	$scope.obj.group_auth_state = '1';



	//景区下拉
	slist().then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

	// //票机详情
	// info.get({'id' : id}, function(res){

	// 	console.log(res);

	// 	if(res.errcode === 0)
	// 	{
	// 		$scope.obj = res.data;
	// 		$scope.obj.id = id;
	// 	}
	// 	else
	// 	{
	// 		alert(res.errmsg);
	// 	}

	// });


	function trim(str) {
		return str.replace(/(^\s+)|(\s+$)/g, "");
	}

	//gogo
	$scope.gogo = function(){

		if ($scope.obj.type == 5 || $scope.obj.type == 6) {
			if ($scope.obj.seller_login_code == undefined || trim($scope.obj.seller_login_code) == '' ) {
				alert('请填写登录用户')
				return;
			}
		}

		create.save($scope.obj, function(res){

			console.log(res);

			if(res.errcode !== 0)
			{
				alert(res.errmsg);
			}
			else
			{
				$state.go('app.devicetktedit', {'id' : res.data.uuid});
			}

		});

	};

};