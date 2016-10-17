module.exports = function($scope, $state, cardpoollist){

	$scope.delete = function()
    {
        $state.go('app.deletecard');
    }
    // 往卡池里添加卡
    $scope.add = function(poolcode)
    
    {   alert('tianjiaka');
        $state.go('app.addcard', {'poolcode':poolcode});
    }
    // 添加卡池
    $scope.addcardpool = function()
    {
        $state.go('app.addcardpool');
    }
    // 卡池详情
    $scope.release = function(poolcode)
    {   
    	
        $state.go('app.releasecard', {'poolcode':poolcode});
    }
    // 释放卡
    $scope.relief = function(poolcode)
    {
        $state.go('app.relief', {'poolcode':poolcode});
        
    }
    // 修改卡信息
    $scope.resivecardinfo = function(poolcode)
    {
    	//alert('修改卡信息');
        $state.go('app.resivecardinfo', {'poolcode':poolcode});
    }
    // 修改卡池信息
    $scope.resivepoolinfo = function(poolcode)
    {
        $state.go('app.addcardpool', {'poolcode':poolcode});
    }


    /*$scope.addcardpool = function()
    {
        $state.go('app.addcardpool');
    }*/

    $scope.cardpoollists = [];
   

	//$scope.lottry = {
	//	'sevenstart' : '',
	//	'period' : ''
	//};

   
    $scope.getlist = function(){
    	
    	cardpoollist.save({}, function(res){
			
			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			$scope.cardpoollists = res.data;
		});
    };
    $scope.getlist();
    


	
    
};