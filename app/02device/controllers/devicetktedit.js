module.exports = function($scope, info, $stateParams, slist, devicetype){

	//机器id
	var id = $stateParams.id;

	//机器类型
	$scope.typearr = devicetype;

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

	//票机详情
	info.get({'id' : id}, function(res){

		console.log(res);

		if(res.errcode === 0)
		{
			$scope.obj = res.data;
		}
		else
		{
			alert(res.errmsg);
		}

	});


};