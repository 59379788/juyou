module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,FileUploader,saveNewsPhoto,getNewsRollingInfoById,updateRolling,toaster){  
    var id = $stateParams.id;
    $scope.info = {
        'type' : '',
        'title' : '',
        'photo' : '',
        'remark' : '',
        'url' : ''
    };
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
        $scope.info.photo = response.savename;
    };

    if (id) {
        getNewsRollingInfoById.save({'id':id},function(res) {
            if (res.errcode!=0) {
                toaster.success({title: "", body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.info = res.data;
        })
    }

	$scope.save = function() {
        if (id && $scope.info.title!=''&&$scope.info.type!=''&&$scope.info.photo!=''&&$scope.info.url!='') {
            var para = {
                'id' : id
            }
            para = angular.extend($scope.info,para);
            updateRolling.save(para,function(res){
                console.log(para);
                if (res.errcode !== 0) {
                    toaster.success({title: "", body:res.errmsg});
                    return;
                }
                console.log(res.data);
                toaster.success({title: "", body:"修改成功"});
                $state.go('app.newsrollinglist');
            });


        } else if ($scope.info.title!=''&&$scope.info.type!=''&&$scope.info.photo!=''&&$scope.info.url!='') {
            saveNewsPhoto.save($scope.info,function(res){
                console.log($scope.info);
                if (res.errcode !== 0) {
                    toaster.success({title: "", body:res.errmsg});
                    return;
                }
                console.log(res.data);
                toaster.success({title: "", body:"添加成功"});
                $state.go('app.newsrollinglist');
            });

        } else {
            toaster.success({title: "", body:"请将数据补充完整"});
        }
            
        
        
    };
        

};