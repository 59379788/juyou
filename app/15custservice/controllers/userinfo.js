module.exports = function($scope, userinfo){

	$scope.searchform = {};
    $scope.searchform.mobile = '15840491086';
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
    $scope.load();

};