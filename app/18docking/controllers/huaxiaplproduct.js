module.exports = function($scope, ITEMS_PERPAGE, getAgencyProductInfo){

	$scope.searchform = {};

	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    //$scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    var para = {
    	pageIndex : $scope.bigCurrentPage

    };

    if($scope.searchform.productCode != ''){
    	para = angular.extend($scope.searchform, para);
    }
    
    $scope.load = function () {
        console.log(para);
        getAgencyProductInfo.save(para, function(res){

         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	if(!(res.data.product.list instanceof Array)){
         		var xx = [];
         		xx.push(res.data.product.list);
         		$scope.objs = xx;
         		$scope.bigTotalItems = res.data.product.list.length;
         		return;
         	}

         	$scope.objs = res.data.product.list;
         	$scope.bigTotalItems = res.data.product.list.length;

        });

    };
    $scope.load();

};