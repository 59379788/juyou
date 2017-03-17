module.exports = function($scope, $stateParams, $state, $uibModal, ITEMS_PERPAGE,FileUploader,findViewList,deletead,toaster){ 
    var id = $stateParams.id;
    // $scope.info = {
    //     'id' : id,
    //     'saleId' : '111',
    //     'oldPrice' : '',
    //     'targetPrice' : '',
    //     'allowableNumber' : '',
    //     'description' : '',
    //     'img' : '',
    //     'title' : '',
    //     'activeId' : id,
    //     'totalnum' : '',
    //     'sellnum' : ''

    // },
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.creatad = function() {
        $state.go('app.addad');
    };
    $scope.getlist = function () {
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
        };
        findViewList.save(para,function(res) {
            if (res.errcode!=0) {
                toaster.success({title: "", body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;
        })
    };
    $scope.getlist();
    $scope.delete = function(ad_id) {
        if (confirm('确定要删除吗')) {
            deletead.save({'ad_id':ad_id},function (res) {
                console.log(ad_id);
                if (res.errcode!=0) {
                    toaster.success({title: "", body:res.errmsg});
                    return;
                }
                console.log(res);
                toaster.success({title: "", body:"删除成功"});
                $scope.getlist();

            });
        } else {

        }
        
        
    };

    $scope.edit = function(ad_id) {
        $state.go('app.addad',{'ad_id':ad_id});
    }

    

};