module.exports = function($scope, $stateParams, $state, $uibModal, ITEMS_PERPAGE,FileUploader,saveInformation,getInformation,updateinformation,
getDate,str2date,date2str,toaster){  
    var id = $stateParams.id;
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.startTime = new Date(); 

    $scope.open = function(obj) {
        obj.opened = true;
    };
    $scope.info = {
        'title' : '',
        'img' : '',
        'time' : getDate($scope.section.startTime) + " 00:00:00",
        'create_by' : '',
        'num' :'',
        'content' : '',
        'asort' : ''
    }


    // 主图
    var uploader = $scope.uploader = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });
    
    
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.info.img = response.savename;
    };

    if(id){
        console.log(id);
        getInformation.save({'id' : id},function(res){
            if(res.errcode != 0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.info = res.data;
            $scope.section.startTime = str2dat(res.data.time);
        })
    }
    
    

    $scope.ok = function () {
        console.log('ok');
        if(id){         
            updateinformation.save($scope.info,function(res){
                if(res.errcode != 0){
                    toaster.success({title:"",body:res.errmsg});
                    return;
                }
                console.log(res);
                toaster.success({title:"",body:"添加成功"});
                $uibModalInstance.close();

            })
            
        } else {
            saveInformation.save($scope.info,function(res){
                if(res.errcode != 0){
                    toaster.success({title:"",body:res.errmsg});
                    return;
                }
                console.log(res);
                toaster.success({title:"",body:"添加成功"});
                $uibModalInstance.close();
            })
            
        }
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};