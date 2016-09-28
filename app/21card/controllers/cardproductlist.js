module.exports = function($scope, $state, cardproductlist, onsale, $uibModal, goodoffsale){

	$scope.searchform = {};
	$scope.productinfo = {
         'code' : '11'
	};

	$scope.search = function(){

		cardproductlist.save($scope.searchform, function(res){
			console.log(res);
			if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			$scope.objs = res.data;
			$scope.productinfo = res.data[0].code;
			console.log($scope.productinfo);
		})
	};
	$scope.search();

	$scope.create = function(){

		$state.go('app.cardproduct');

	};

	$scope.edit = function(code){

		$state.go('app.cardproduct', {'code' : code});

	};

    
    // 上架
	$scope.start = function(code){
       
        alert(code);
        
        onsale.save({'code':code}, function(res){
			console.log(res);
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	alert('上架成功');
			    	return;
			    }
     	});        
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
          init();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

	};


};