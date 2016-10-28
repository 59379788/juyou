module.exports = function($scope, $state, $stateParams, searchcard, batchnumber, changestatus){
	var startcard = $stateParams.startcard;
	var endcard = $stateParams.endcard;
	var cardmakestatus = $stateParams.cardmakestatus;
	var cardbatch = $stateParams.cardbatch;
	var cardgivetatus = $stateParams.cardgivetatus;
	console.log($stateParams.startcard);
	console.log($stateParams.endcard);
	console.log($stateParams.cardmakestatus);
    // 搜索卡产品
    $scope.searchform = { 
    	'startcard' : startcard,
    	'endcard' : endcard,
    	'cardmakestatus' : cardmakestatus,
    	'cardbatch' : cardbatch,
    	'cardgivetatus' : cardgivetatus
    };
    console.log($scope.searchform);
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
    $scope.searchcard();

    
    // 设置批次号
    $scope.setbatchnumber = function(mincard,maxcard){ 
    	$state.go('app.batchnumber',{'mincard' : mincard, 'maxcard' : maxcard});
    };
    
    
    // 制卡完成
    $scope.setcardcomplete = function(cardmakebatch,mincard,maxcard){ 
    	//alert('制作中变为已制作');
    	$state.go('app.cardcomplete', {'cardmakebatch' : cardmakebatch, 'mincard' : mincard, 'maxcard' : maxcard});
    	
    };
  


};