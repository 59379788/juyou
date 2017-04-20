module.exports = function($scope, $stateParams, $state, $uibModal, $uibModalInstance, ITEMS_PERPAGE,FileUploader,toaster,viewlist,getPlaceHot,id,savePlaceHot,updatePlaceHot){ 
    $scope.info = {
        'code' : '',
        'name' : '',
        'asort' : '',
        'ms' : ''
       
    }
    $scope.searchform = {
        'selected' : {
            'name' : ''
        }
    }
    
    if(id){
        console.log(id);
        getPlaceHot.save({'id' : id},function(res){
            if(res.errcode != 0){
                 toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.info = res.data;
            console.log(res.data.code);
            var viewcode = res.data.code;
            viewlist.save({'type' : 'J'},function(res){
                if(res.errcode != 0){
                    toaster.success({title:"",body:res.errmsg});
                    return;
                }
                var array = res.data;
                for(var i = 0; i<array.length; i++){
                    if(viewcode == array[i].code){
                        $scope.searchform.selected.name = array[i].name;
                    }
                }
                

            })
        // var id = $st

        })
    }
    
    viewlist.save({'type' : 'J'},function(res){
        if(res.errcode != 0){
            toaster.success({title:"",body:res.errmsg});
            return;
        }
        console.log('景区信息');
        console.log(res);
        $scope.datas = res.data;

    })

    

    $scope.ok = function(){
        $scope.info.code = $scope.searchform.selected.code;
        if(id){
            var para = {
                'id' : id
            }
            para = angular.extend($scope.info, para);
            updatePlaceHot.save(para,function(res){
                console.log(para);
                if(res.errcode != 0){
                    toaster.success({title:"",body:res.errmsg});
                    return;
                }
                toaster.success({title:'',body:"修改成功"});
                $uibModalInstance.close();                
            })
        } else {
            console.log($scope.info);
            savePlaceHot.save($scope.info,function(res){
                if(res.errcode != 0){
                    toaster.success({title:"",body:res.errmsg});
                    return;
                }
                toaster.success({title:'',body:"添加成功"});
                $uibModalInstance.close();
            })
        }
        

    }
    $scope.cancel = function(){
        $uibModalInstance.close();
    };


};