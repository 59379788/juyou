module.exports = function($scope, $state, $stateParams, $uibModal,findOrdertTXList,updateTiXian,ITEMS_PERPAGE,toaster){
  /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    $scope.getlist = function () {
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
        };
        //para = angular.extend($scope.info,para); 
        findOrdertTXList.save(para,function (res) {
        if (res.errcode != 0) {
            toaster.success({title:"",body:res.errmsg});
            return;
        }
        console.log('liebiao');
        console.log(res);
        $scope.objs = res.data.results;
        $scope.bigTotalItems = res.data.totalRecord;
        });
        
    };
    $scope.getlist();

    $scope.change = function(id){
        alert(id);
        updateTiXian.save({'id' : id},function(res){
            if (res.errcode != 0) {
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            toaster.success({title:"",body:"更改状态为提现完成"});
            $scope.getlist();

        })
    }
    

};