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


	//gogo
	$scope.gogo = function(){

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