module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,FileUploader,saveNewsPhoto){  
    $scope.info = {
        'type' : '',
        'title' : '',
        'photo' : '',
        'remark' : ''
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
	$scope.save = function() {
            saveNewsPhoto.save($scope.info,function(res){
            console.log($scope.info);
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res.data);
            alert('添加成功！');
            $state.go('app.newsrollinglist');
            });
        
        
    };

};