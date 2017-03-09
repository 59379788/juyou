module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,FileUploader,saveIntegralGood,updateMal,getInfoBySaleCode){  
    var id = $stateParams.id;
    //alert(id);
    $scope.info = {
        'sale_code' : '',
        'title' : '',
        'picture' : '',
        'photos' : '',
        'content' : '',
        'market_price' : '',
        'introduction' : '',
        'integral' : '',
        'insert_by' : '',
        'integra_num' : '',
        'id' : id
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
        $scope.info.picture = response.savename;
    };

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
        $scope.info.photos = response.savename;
    };

    if (id) {
        alert('ididiid');
        getInfoBySaleCode.save({'id' : id}, function(res){
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            $scope.info = res.data;

        });
    } 


	$scope.savegoods = function() {
        if(id){
             updateMal.save($scope.info, function(res){
                console.log($scope.info);
                if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
                }
                console.log(res);
                alert('修改成功！');
                $state.go('app.integral');
            });

        } else {           
            saveIntegralGood.save($scope.info, function(res){
                console.log($scope.info);
                if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
                }
                console.log(res);
                alert('添加成功！');
                $state.go('app.integral');
            });
        }
        
    };

};