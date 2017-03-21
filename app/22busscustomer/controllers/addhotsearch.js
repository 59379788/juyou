module.exports = function($scope, $stateParams, $state, $uibModal, $uibModalInstance, ITEMS_PERPAGE,id,getHotSearchById,updateHotSearch,saveHotSearch,toaster){  
    $scope.info = {
        'value' : '',
        'type' : ''
    }
    if(id){
        getHotSearchById.save({'id' : id},function(res){
            if(res.errcode != 0){
                toaster.success({title: "", body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.info = res.data;
        });
    }

    $scope.ok = function(){
        if(id){
            if($scope.info.value!=''&&$scope.info.type!=''){
                updateHotSearch.save($scope.info,function(res){
                    if(res.errcode != 0){
                        toaster.success({title: "", body:res.errmsg});
                        return;
                    }
                    console.log(res);
                    toaster.success({title: "", body:"修改成功"});
                    $uibModalInstance.close();
                })
            } else {
                toaster.success({title: "", body:"请将数据补充完整"});
            }
        
        } else {
            if($scope.info.value!=''&&$scope.info.type!=''){
                console.log($scope.info);
                saveHotSearch.save($scope.info,function(res){
                    if(res.errcode!=0){
                        toaster.success({title: "", body:res.errmsg});
                        return;
                    }
                    console.log(res);
                    toaster.success({title: "", body:"添加成功"});
                    $uibModalInstance.close();
                })
            } else {
                toaster.success({title: "", body:"请将数据补充完整"});

            }
        }
        

    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};