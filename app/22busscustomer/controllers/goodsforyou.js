module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,savegood,findgoodsforadminlist,updatestateztoone){  
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    $scope.getlist = function(){
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        findgoodsforadminlist.save(para, function(res){
            if (res.errcode !== 0) {
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;
        });
    };
    $scope.getlist();

    $scope.info = {
        'goods_id' : ''
    };
	$scope.add = function(goods_id) {
        savegood.save({'goods_id' : goods_id},function(res){
            console.log($scope.info);
            if (res.errcode !== 0) {
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            toaster.success({title:"",body:"添加成功"});
            $scope.getlist();
        });
    };

    $scope.console = function(goods_id){
        updatestateztoone.save({'goods_id' : goods_id}, function(res){
            console.log({'goods_id' : goods_id});
            if (res.errcode !== 0) {
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            toaster.success({title:"",body:"取消成功"});
            $scope.getlist();
        });
    };

};