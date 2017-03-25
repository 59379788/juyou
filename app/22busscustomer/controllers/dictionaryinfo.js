module.exports = function($scope, $stateParams, $state,FileUploader,ITEMS_PERPAGE,dictionary,getInfoById,findTypeList,toaster){ 
   var id = $stateParams.id;
   $scope.info={
        'id':'',
        'code':'',
        'label':'',
        'type':'',
        'info':'',
        'url' : '',
        'asort':'',
        'img': '',
        'remark':''
   }
    $scope.searchform = {
        'selected' :{
            'type' : ''
        }
    };

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
    if (id) {
        getInfoById.save({'id':id},function(res){
            if (res.errcode != 0) {
                toaster.success({title:"",body : res.errmsg});
                return;
            }
            console.log(res.data);
            $scope.info = res.data;

        })
    }
    $scope.gettypelist = function (){
        findTypeList.save($scope.searchform,function(res){
            if (res.errcode!=0) {
                toaster.success({title:"",body : res.errmsg});
            }
            console.log(res);
            $scope.datas = res.data;

        })
    };
    $scope.gettypelist();
    $scope.save = function () {
        dictionary.save($scope.info, function (res) {
            console.log($scope.info);
            $scope.info.type=$scope.searchform.selected.type;
            if (res.errcode != 0) {
                toaster.success({title:"",body : res.errmsg});
                return;
            }
            $state.go('app.dictionary_managed');
    });
  };

};