module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,headlinelist,delheadline){  
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
        headlinelist.save(para, function(res){
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;
        });
    };
    $scope.getlist();

    $scope.addheadline = function () {
        $state.go('app.addheadline');
    };

    $scope.delete = function(id) {
        if (confirm('确定要删除吗?')) {
            delheadline.save({'id':id}, function (res) {
                console.log({'id':id});
                if (res.errcode !== 0) {
                    alert(res.errmsg);
                    return;
                }
                console.log(res);
                $scope.getlist();
            });
            return;
        } 
        
    }; 
    $scope.edit = function(id) {
        $state.go('app.addheadline',{'id' : id});
    };
    
};