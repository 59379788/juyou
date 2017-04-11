module.exports = function($scope, $stateParams, $uibModal,findPlaceHotList,toaster,ITEMS_PERPAGE,savePlaceHot,getPlaceHot,updatePlaceHot,delPlaceHot,viewlist,toaster){
    $scope.obj = {};
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
   
    $scope.getlist = function(){
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
        };
        findPlaceHotList.save(para,function(res){
            console.log(para);
            if(res.errcode != 0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

        })

    }

    $scope.getlist();
    $scope.addplacehot = function(id){
        var modalInstance = $uibModal.open({
          template: require('../views/addplacehot.html'),
          controller: 'addplacehot',
          size: 'lg',
          resolve: {
            viewlist : function(){
                return viewlist;
            },
            savePlaceHot : function(){
                return savePlaceHot;
            },
            updatePlaceHot : function(){
                return updatePlaceHot;
            },
            id : function(){
                return id;
            },
            getPlaceHot :function(){
                return getPlaceHot;
            }


          }
        });

        modalInstance.result.then(function () {
          $scope.getlist();
          
        }, function () {
          //$scope.load();
        });
        
        
    };
    $scope.edit = function(id){
        var modalInstance = $uibModal.open({
          template: require('../views/addplacehot.html'),
          controller: 'addplacehot',
          size: 'lg',
          resolve: {
            viewlist : function(){
                return viewlist;
            },
            savePlaceHot : function(){
                return savePlaceHot;
            },
            updatePlaceHot : function(){
                return updatePlaceHot;
            },
            id : function(){
                return id;
            },
            getPlaceHot :function(){
                return getPlaceHot;
            }


          }
        });

        modalInstance.result.then(function () {
          $scope.getlist();
          
        }, function () {
          //$scope.load();
        });
        
        
    };
    $scope.delete = function(id){
       if(confirm('确定要删除吗?')){
            delPlaceHot.save({'id' : id},function(res){
                if(res.errcode != 0){
                    toaster.success({title:"",body:res.errmsg});
                    return;
                }
                toaster.success({title : "",body:"删除成功"});
                $scope.getlist();
            })
       }
        
    }
	

};