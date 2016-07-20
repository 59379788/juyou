module.exports = function($scope, corridorproductlist, corridorproductinfo, ITEMS_PERPAGE, $uibModal){

	$scope.searchform = {};

	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    var para = {
        currentPage:$scope.bigCurrentPage.toString(), 
        pageSize:$scope.itemsPerPage.toString()
    };

    para = angular.extend($scope.searchform, para);
    
    corridorproductlist.save(para, function(res){

     	console.log(res);

     	if(res.errcode !== 0)
     	{
     		alert("数据获取失败");
     		return;
     	}

     	$scope.objs = res.data.Products;
        $scope.bigTotalItems = res.data.ItemCount;

    });

    $scope.detail = function(id){

        var modalInstance = $uibModal.open({
          template: require('../docking/corridorproductdetail.html'),
          controller: 'corridorproductdetail',
          size: 'xs',
          resolve: {
            id : function(){
                return id;
            },
            corridorproductinfo : function(){
                return corridorproductinfo;
            }
          }
        });

    };

    
};