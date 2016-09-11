module.exports = function($scope, registercount){
    
    $scope.load = function () {
        
        registercount.get({}, function(res){

         	console.log(res);

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