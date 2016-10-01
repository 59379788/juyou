module.exports = function($scope, $state, searchcard){
    // 搜索卡产品
    $scope.searchform = { 
    	'startcard' : '',
    	'endcard' : '',
    	'cardmakestatus' : '',
    	'cardbatch' : '',
    	'cardgivetatus' : ''
    };
    $scope.searchcard= function(){ 
    	searchcard.save($scope.searchform, function(res){
			console.log($scope.searchform);
			//console.log(res);
			if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			$scope.searchobj = res.data;
			console.log($scope.searchobj);
			//$scope.productinfo = res.data[0].code;
			//console.log($scope.productinfo);
	   })
    };

    // 添加到卡池
    $scope.addtocardpool = function(){
    	$state.go('app.addtocardpool');
    };
    // 设置批次号
    $scope.batchnumber = function(){ 
    	$state.go('app.batchnumber');
    };
    // 置为未发放(接释放卡接口)
    /*$scope.unissued = function(){ 
    	$state.go('app.unissued');

    };*/
    // 制卡完成
    $scope.cardcomplete = function(cardmakebatch){ 
    	//alert('制作中变为已制作');
    	$state.go('app.cardcomplete', {'cardmakebatch' : cardmakebatch});
    	
    };


};