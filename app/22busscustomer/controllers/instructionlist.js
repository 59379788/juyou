module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findExplainList,updateExplain,updateDelIns,toaster){ 
    $scope.somepara = {
        'title_identifier' : '',
        'title' :''
    }

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.search = function(){
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        para = angular.extend($scope.somepara,para); 
        findExplainList.save(para,function(res){
        if (res.errcode !== 0) {
            console.log(res.errmsg);
            return;
        }
        console.log(res);
        $scope.objs = res.data.results;
        });
    }

    $scope.getlist = function(){
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        findExplainList.save(para,function(res){
        if (res.errcode !== 0) {
            console.log(res.errmsg);
            return;
        }
        console.log(res);
        $scope.objs = res.data.results;
        $scope.bigTotalItems = res.data.totalRecord;
        });
    };
    $scope.getlist();

    $scope.addinstruction = function(){
        $state.go('app.addinstruction');
    };

    $scope.change = function(id){
        $state.go('app.addinstruction',{'id':id});

    };
    $scope.delete = function(id){
        if (confirm('确定删除吗?')) {
            updateDelIns.save({'id' : id},function(res){
                if (res.errcode != 0) {
                    toaster.success({title:"",body:res.errmsg});
                    return;
                }
                console.log(res);
                toaster.success({title:"",body:"删除成功"});
                $scope.getlist();
            });
            return;
        }
        
    };

    $scope.detail = function(id,title_identifier){
        $state.go('app.addinstruction',{'id':id, 'title_identifier':title_identifier});
    };
     
   


   
   
};