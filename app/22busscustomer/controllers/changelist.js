module.exports = function($scope, $state, $stateParams, $uibModal,ITEMS_PERPAGE,findgoodscantlist,updatetraddestate,toaster){
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
        findgoodscantlist.save(para,function(res){
            if (res.errcode !== 0) {
                toaster.success({title:"",body : res.errmsg});
                return;
            };
            console.log(res);
           $scope.objs = res.data.results;
           $scope.bigTotalItems = res.data.totalRecord;

        });
    };

    $scope.getlist();

    $scope.agree = function(trade_goods_id){
        updatetraddestate.save({'trade_goods_id' : trade_goods_id,'tradde_state':'1'},function(res){
            if (res.errcode !== 0) {
            toaster.success({title:"",body : res.errmsg});
                return;
            }
            console.log(res);
            toaster.success({title:"",body : "成功!"});
            $scope.getlist();
        });
    };

    $scope.disagree = function(trade_goods_id){
        updatetraddestate.save({'trade_goods_id' : trade_goods_id,'tradde_state':'2'},function(res){
            if (res.errcode !== 0) {
                toaster.success({title:"",body : res.errmsg});
                return;
            }
            console.log(res);
            toaster.success({title:"",body : "成功!"});
            $scope.getlist();
        });
    };
};