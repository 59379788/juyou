module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findInformationList,delinformation,toaster){ 

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
        findInformationList.save(para,function(res){
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

    $scope.addinformation = function(id){
        $state.go('app.addinformation');
    }

    $scope.edit = function(id){
        $state.go('app.addinformation',{'id' : id});
    }
   
   $scope.delete = function(id){
       if(confirm('确定要删除吗?')){
            delinformation.save({'id' : id},function(res){
            if(res.errcode != 0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
                console.log(res);
                toaster.success({title:"",body:"删除成功"});   
                $scope.getlist();             
             })
       }
       
   }


   
   
};