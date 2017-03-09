module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,saveheadline,FileUploader,getContentsInfo,updateNews){  
    var id = $stateParams.id;
    $scope.info = {
        'title' : '',
        // 'header_photo' : '',
        // 'drawing_photo' : '',
        'publisher' : '',
        'creat_by' : '',
        'content' : '',
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
        $scope.info.header_photo = response.savename;
    };

    // 副图
    var uploader1 = $scope.uploader1 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });

    uploader1.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });
    
    
    uploader1.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.info.drawing_photo = response.savename;
    };
	
    if (id) {
        getContentsInfo.save({'id' : id},function(res) {
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            $scope.info = res.data;
        });
    } 

    $scope.save = function () {
            if (id) {
                var para = {
                    'id':id
                }    
                if ($scope.info.title!=''&& $scope.info.content!=''&& $scope.info.url!='') {
                    para = angular.extend($scope.info,para);
                    updateNews.save(para,function(res) {
                        if (res.errcode !== 0) {
                            alert(res.errmsg);
                            return;
                        }
                        alert('修改成功！');
                        $state.go('app.headline');
                    });
                } else {
                    alert('请将数据补充完整!');
                }
                
            } else {
                if ($scope.info.title!=''&&$scope.info.content!=''&&$scope.info.url!='') {
                    saveheadline.save($scope.info,function (res) {
                        if (res.errcode !== 0) {
                            alert(res.errmsg);
                            return;
                        }
                        console.log(res);
                        alert('添加成功!')
                        $state.go('app.headline');
                    });
                } else {
                    alert('请将数据补充完整!');
                }
                
            }

        
        
        
    };

};