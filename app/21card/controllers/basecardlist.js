module.exports = function($scope, $state, cardbaselist, cardproductlist,searchcard,ITEMS_PERPAGE){
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    // 设置批次号
    $scope.batchnumber = function(mincard,maxcard){ 
    	$state.go('app.batchnumber',{'mincard' : mincard, 'maxcard' : maxcard});
    };
    
    // 制卡完成
    $scope.cardcomplete = function(cardmakebatch,mincard,maxcard){ 
    	$state.go('app.cardcomplete', {'cardmakebatch' : cardmakebatch, 'mincard' : mincard, 'maxcard' : maxcard});
    	
    };
    // 创建卡产品
    $scope.create = function(){
		$state.go('app.cardproduct');
	};

    // 搜索基本卡
   
	$scope.productinfo = {
         'code' : '11'
	};
	$scope.searchobj = {};
    $scope.searchform = { 
               'startcard' : '',
    	       'endcard' : '',
    	       'cardmakestatus' : '',
    	       'cardbatch' : '',
    	       'cardgivetatus' : ''
            };
	
    
	$scope.search = function(){
		if (($scope.searchform.startcard !== '' && $scope.searchform.endcard === '') || ($scope.searchform.startcard === '' && $scope.searchform.endcard !== '') ) { 
			alert('卡号输入不完全');			
		} else if ($scope.searchform.endcard < $scope.searchform.startcard) { 
			alert('结束卡号不能小于起始卡号');
		}else { 


		    var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
            };
            para = angular.extend($scope.searchform, para);
			//$state.go('app.searchcard', {'startcard' : startcard, 'endcard':endcard, 'cardmakestatus':cardmakestatus, 'cardbatch': cardbatch, 'cardgivetatus':cardgivetatus});
		    searchcard.save(para, function(res){
			console.log(para);
			if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			$scope.objs = res.data.results;
			$scope.bigTotalItems = res.data.totalRecord;
			console.log(res);
	        })
	    }
			
	};
    $scope.search();

};