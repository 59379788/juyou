module.exports = function($scope, $state, cardbaselist, cardproductlist){


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
    /*$scope.addtocardpool = function(){
    	$state.go('app.addtocardpool');
    };*/
    // 设置批次号
    $scope.batchnumber = function(mincard,maxcard){ 
    	$state.go('app.batchnumber',{'mincard' : mincard, 'maxcard' : maxcard});
    };
    // 置为未发放(接释放卡接口)
    /*$scope.unissued = function(){ 
    	$state.go('app.unissued');

    };*/
    // 制卡完成
    $scope.cardcomplete = function(cardmakebatch,mincard,maxcard){ 
    	//alert('制作中变为已制作');
    	$state.go('app.cardcomplete', {'cardmakebatch' : cardmakebatch, 'mincard' : mincard, 'maxcard' : maxcard});
    	
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

	$scope.searchcard = function(startcard,endcard,cardmakestatus,cardbatch,cardgivetatus){
		if ((startcard !== '' && endcard === '') || (startcard === '' && endcard !== '') ) { 
			alert('卡号输入不完全');
			
		} else { 
			$state.go('app.searchcard', {'startcard' : startcard, 'endcard':endcard, 'cardmakestatus':cardmakestatus, 'cardbatch': cardbatch, 'cardgivetatus':cardgivetatus});
		}
		
      
		
	};
	



};