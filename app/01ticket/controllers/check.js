module.exports = function($scope, checkcode, checkcard, checkid){

	//票码
	$scope.code = "";
	//设备号
	$scope.device = "";

	$scope.check = function(){

		var len = $scope.code.length;

		if(len === 0) return;

		//票码
		if(len === 8)
		{
			console.log({"code" : $scope.code, "device" : $scope.device});
			checkcode.get({"code" : $scope.code, "device" : $scope.device}, function(res){

				console.log(res);
			});
		}
		//身份证
		else if(len === 18)
		{
			console.log({"ID" : $scope.code, "device" : $scope.device});
			checkid.get({"ID" : $scope.code, "device" : $scope.device}, function(res){

				console.log(res);

				if(res.errcode === 0)
				{
					$scope.objs = res.data;
				}
				else
				{
					alert(res.errmsg);
				}
			});
		}
		//卡号
		else if(len === 12)
		{
			console.log({"card" : $scope.code, "device" : $scope.device});
			checkcard.get({"card" : $scope.code, "device" : $scope.device}, function(res){

				console.log(res);

			});
		}
		else
		{
			alert("位数错误");
		}

	};
};