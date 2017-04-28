module.exports = function($scope,getUserBaseInfomobile,toaster){

	$scope.searchform = {};
    
    $scope.search = function () {
        
        getUserBaseInfomobile.save($scope.searchform, function(res){
            console.log($scope.searchform);
         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	$scope.objs = res.data;

        });

    };
    // $scope.load();

};