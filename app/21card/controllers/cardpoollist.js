module.exports = function($scope, $state, cardpoollist){

	$scope.delete = function()
    {
        $state.go('app.deletecard');
    }
    // 添加卡
    $scope.add = function(poolcode)
    {
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
        alert('shifang');
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
    


	/*$scope.cardpoollist = function(){
		cardpoollist.save({}, function(res){
			alert('dhfkaj');
			console.log(res);
		});

	};*/
	/*$scope.querylottry = function(){
		//alert($scope.lottry.number);
		if ($scope.lottry.sevenstart.length !== 7) {
			alert('七星彩号码不正确，请输入正确七星彩号码');
			return;
		}
		console.log($scope.lottry);
		getWeekLottey.save($scope.lottry, function(res){
			// 点击查询之后确定按钮变为可用状态
			//document.getElementById("confirmBtu").disabled = false;

			console.log(res);
			
			if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			
			$scope.btn.periodtxt = true;
			$scope.user.lotter = res.data.lotter;
			//console.log({'userid' : res.data.uid.uid});
		    lotteyUserinfo.save({'userid' : res.data.uid.uid}, function(res){
				console.log(res);
				if (res.errcode !== 0) {
					alert(res.errmsg);
					$scope.user = '';
					return;
				} 
				$scope.user.username = res.data.username;
				$scope.user.mobile = res.data.mobile;
				$scope.user.period = $scope.lottry.period;
				$scope.btn.confirm = false;
		    });

		});

	};*/
    
};