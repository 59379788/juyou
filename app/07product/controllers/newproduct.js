module.exports = function($scope, $stateParams, $http, $q, productid, what, FileUploader, str2date, date2str, $resource,toaster,$uibModalInstance,auditing){

    var id = $stateParams.id || productid;

    console.log('id');
    console.log(id);

    console.log('what');
    console.log(what);
    //产品对象，保存着产品的基本信息
    $scope.saleobj = {
        'id' : id || '',
    };
  
    $scope.util = {
        'what' : what,
        'str2date' : str2date,
        'date2str' : date2str,
        '$uibModalInstance' : $uibModalInstance,
        'auditing' : auditing
    }
    //销售品功能列表
    $scope.funobj = {};

    //基本信息中需要提前弄好的信息。
    $scope.baseinfo = {
        'imageshow' : {},
        'dateshow' : {},
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
        $scope.saleobj.top_pic = response.savename;
    };

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
        $scope.saleobj.logo = response.savename;
    };
  
    $scope.baseinfo.imageshow.uploader1 = uploader1;
    $scope.baseinfo.imageshow.uploader2 = uploader2;


    $scope.baseinfo.dateshow.periodstart = {
        'date' : new Date(),
    };

    $scope.baseinfo.dateshow.periodend = {
        'date' : new Date($scope.baseinfo.dateshow.periodstart.date.getFullYear(),11,31),
    };

    $scope.baseinfo.dateshow.open = function(obj) {
        obj.opened = true;
    };



    
};