module.exports = function($scope, $state, userinfo, updateUserAuthInfo){

	$scope.searchform = {};
    //$scope.searchform.mobile = '15840491086';
    $scope.load = function () {
        
        userinfo.save($scope.searchform, function(res){

         	console.log(res.data);

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	$scope.obj = res.data;

        });

    };
    //$scope.load();

    $scope.edit = function(mobile){

    	$state.go('app.edituserinfo', {'mobile' : mobile});

    };

    $scope.clear = function(mobile){
    	var para = {
            mobile:mobile
        };
		updateUserAuthInfo.save(para, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				alert("清除实名制成功");
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}

};