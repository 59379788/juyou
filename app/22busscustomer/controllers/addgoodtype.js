module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,savetype,FileUploader,toaster){  
    $scope.info = {
        'label' : '',
        'img' : ''
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
        $scope.info.img = response.savename;
    };
	$scope.addtype = function() {
        if ($scope.info.label!=='') {
            savetype.save($scope.info,function(res){
            console.log($scope.info);
            if (res.errcode !== 0) {
                toaster.success({title: "", body:res.errmsg});
                return;
            }
            console.log(res);
            toaster.success({title: "", body:"添加成功!"});
            });
        } else {
            toaster.success({title: "", body:"类型名不能为空!"});
        }
        
    };

};