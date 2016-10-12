module.exports = function($scope, $state, cardbaselist, cardproductlist, searchcard){


    cardbaselist.save({}, function(res){

        console.log(res);

        if(res.errcode !== 0)
        {
            alert(res.errmsg);
            return;
        }
        $scope.objs = res.data;


    });

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
    // 创建卡产品
    $scope.create = function(){

		$state.go('app.cardproduct');

	};

    // 搜索卡产品
    $scope.searchform = { 
    	'startcard' : '',
    	'endcard' : '',
    	'cardmakestatus' : '',
    	'cardbatch' : '',
    	'cardgivetatus' : ''
    };
	$scope.productinfo = {
         'code' : '11'
	};
	$scope.searchobj = {};

	$scope.searchcard = function(){
       // $state.go('app.searchcard', {'searchobject' : searchobject});
		/*searchcard.save($scope.searchform, function(res){
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
		})*/
		 $state.go('app.searchcard');
	};
	//$scope.search();



};