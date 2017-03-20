module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findHotSearchList,deleteHotSearch,saveHotSearch,getHotSearchById,updateHotSearch,toaster){  
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
                    toaster.success({title: "", body:res.errmsg});
                    return;
                }
                console.log(res);
                $scope.getlist();

            })
        } else {
            toaster.success({title: "", body:"请将数据补充完整"});

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

    $scope.edit = function(id){
        var modalInstance = $uibModal.open({
          template: require('../views/addhotsearch.html'),
          controller: 'addhotsearch',
          size: '',
          resolve: {
            id : function(){
                return id;
            },
            getHotSearchById : function(){
                return getHotSearchById;
            },
            updateHotSearch : function(){
                return updateHotSearch;
            }
          }
        });

        modalInstance.result.then(function () {
          $scope.getlist();
          
        }, function () {
          //$scope.load();
        });

    };

        
    
    
};