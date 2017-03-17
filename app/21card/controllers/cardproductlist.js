module.exports = function($scope, $state, cardproductlist, onsale, $uibModal, goodoffsale,ITEMS_PERPAGE, dictbytypelist){

	dictbytypelist({'type' : 'bookline_type'}).then(function(res) {
        if(res.errcode === 0)
        {
            $scope.typearr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    dictbytypelist({'type' : 'sale_state_type'}).then(function(res) {
        if(res.errcode === 0)
        {
            $scope.statearr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

	$scope.searchform = {};
	$scope.productinfo = {
         'code' : '11'
	};
     /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
	$scope.search = function(){
        //alert('搜索卡产品');
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
            };
        para = angular.extend($scope.searchform, para);
		cardproductlist.save(para, function(res){
			console.log(para);
			
			if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			$scope.objs = res.data.results;
			$scope.bigTotalItems = res.data.totalRecord;
			console.log(res);
			//$scope.productinfo = res.data[0].code;
			//console.log($scope.productinfo);
		})
	};
	$scope.search();

	$scope.create = function(){
		
		$state.go('app.cardproduct');

	};

	$scope.edit = function(code, editstate){

		$state.go('app.cardproduct', {'code' : code, 'editstate' : editstate});

	};
	$scope.check = function(id){ 
		$state.go('app.cardproductinfo',{'id':id});
	};

    
    // 上架
	$scope.start = function(code){ 
		if (confirm("你确定要上架吗?")) {
			onsale.save({'code':code}, function(res){
			console.log(res);
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	alert('上架成功');
			    	$scope.search();
			    	return;
			    }
     	});
	    } else { 

	    }
                
	};
    // 下架
	$scope.stop = function(code){
        var modalInstance = $uibModal.open({
          template: require('../views/offsale.html'),
          controller: 'offsale',
          //size: 'lg',
          resolve: {
            // 把卡池编号传到下一个界面
            code : function(){
                return code;
            },
            goodoffsale : function(){
                return goodoffsale;
            }
            
          }
        });

        modalInstance.result.then(function () {

          //init();
           $scope.search();
        }, function () {
           
          //$log.info('Modal dismissed at: ' + new Date());
        });

       
	};


};