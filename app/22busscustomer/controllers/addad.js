module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,saveAd,FileUploader){  
    $scope.info = {
        'advertiser':'',
        'logo' : '',
        'title' : '',
        'ad_type' : '',
        'head_photo' : '',
        'integral_type' : '',
        'max_integral' : '',
        'max_people' : '',
        'content' : '',
        'creat_by' : '',
        'sort' : ''
    }
    $scope.form = {};
    var urlArray = [];
    var str = '';
    // logo
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
        $scope.info.logo = response.savename;
    };

    // 标头图片
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
        $scope.info.head_photo = response.savename;
    };

    // 广告图片（1）
    var uploader2 = $scope.uploader2 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });

    uploader2.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });
    
    
    uploader2.onSuccessItem = function(fileItem, response, status, headers) {
         $scope.form.picture1 = response.savename;
        // console.log(response.savename);
        urlArray.push(response.savename);
    };

   // 广告图片（2）
    var uploader3 = $scope.uploader3 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });

    uploader3.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });
    
    
    uploader3.onSuccessItem = function(fileItem, response, status, headers) {
         $scope.form.picture2 = response.savename;
        // console.log(response.savename);
        urlArray.push(response.savename);

    };

    // 广告图片（3）
    var uploader4 = $scope.uploader4 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });

    uploader4.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });
    
    
    uploader4.onSuccessItem = function(fileItem, response, status, headers) {
         $scope.form.picture3 = response.savename;
        // console.log(response.savename);
        urlArray.push(response.savename);
        str = urlArray.join(","); 
        $scope.info.content = str;   
    };
    

    
	$scope.save = function() {
        if ($scope.info.advertiser!=''&&$scope.info.logo!=''&&$scope.info.title!=''&&$scope.info.ad_type!=''&&$scope.info.head_photo!=''&&$scope.info.integral_type!=''
            &&$scope.info.max_integral!=''&&$scope.info.max_people!=''&&$scope.info.content!='') {
            saveAd.save($scope.info,function(res){
            console.log($scope.info);
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            alert('添加成功！');
            $state.go('app.adlist');
            });
        } else {
            alert('请将数据补充完整');
        }
            
        
        
    };

};