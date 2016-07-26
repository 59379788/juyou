module.exports = function($scope, destoryticketrecord){

	$scope.searchform = {};
    
    $scope.load = function () {
        
        destoryticketrecord.save($scope.searchform, function(res){

         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	$scope.objs = res.data;

        });

    };

};