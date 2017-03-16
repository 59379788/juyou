module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findHotSearchList,deleteHotSearch,saveHotSearch){  
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
        findHotSearchList.save(para, function(res){
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

    $scope.info = {
        'value' : '',
        'type' : ''
    }

    $scope.add = function(){
        if($scope.info.value!=''&&$scope.info.type!=''){
            console.log($scope.info);
            saveHotSearch.save($scope.info,function(res){
                if(res.errcode!=0){
                    alert(res.errmsg);
                    return;
                }
                console.log(res);
                $scope.getlist();

            })
        }
        
    };
    
    $scope.delete = function(id){
        if(confirm('确定要删除吗?')){
            deleteHotSearch.save({'id':id},function(res){
                if(res.errcode!=0){
                    alert(res.errmsg);
                    return;
                }
                console.log(res);
                $scope.getlist();
            });
            return;
        } 
        
    };
    
    
};