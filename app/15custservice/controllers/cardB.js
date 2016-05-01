module.exports = function($scope, cardB){

	$scope.searchform = {};
    
    $scope.load = function () {
        
        cardB.save($scope.searchform, function(res){

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