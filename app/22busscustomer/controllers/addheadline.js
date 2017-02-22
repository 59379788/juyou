module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,saveheadline,FileUploader){  
    $scope.info = {
        'title' : '',
        'header_photo' : '',
        'drawing_photo' : '',
        'publisher' : '',
        'creat_by' : '',
        'content' : ''
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
	// $scope.addtype = function() {
 //        if ($scope.info.label!=='') {
 //            savetype.save($scope.info,function(res){
 //            console.log($scope.info);
 //            if (res.errcode !== 0) {
 //                alert(res.errmsg);
 //                return;
 //            }
 //            console.log(res);
 //            alert('添加成功！');
 //            });
 //        } else {
 //            alert('类型名不能为空！');
 //        }
        
 //    };
    $scope.save = function () {
        saveheadline.save($scope.info,function (res) {
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            alert('添加成功!')
            $state.go('app.headline');
        })
        
    }

};