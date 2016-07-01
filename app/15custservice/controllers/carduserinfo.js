module.exports = function($scope, carduserinfo){

	$scope.searchform = {};

	$scope.load = function(){

		carduserinfo.save($scope.searchform, function(res){

     	console.log(res);

     	if(res.errcode !== 0)
     	{
     		alert("数据获取失败");
     		return;
     	}

     	$scope.obj = res.data;

    });

	}

    


};