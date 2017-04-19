module.exports = function($scope, $state, $stateParams, $resource,saveCategory,findPidList,findDictionaryList,getCategory,FileUploader){

    var id = $stateParams.id;
    console.log(id);
    if(id){
        getCategory.save({'id' : id},function(res){
            if(res.errcode === 0){
				console.log(res);                
                $scope.obj = res.data;
                $scope.infoobj = JSON.parse($scope.obj.data);
			}else{
				alert(res.errmsg);
			}
        })
    }
    $scope.obj = {
        'data' : ''
    };
    $scope.infoobj = {};

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
        $scope.infoobj.logo = response.savename;
    };

	$scope.save = function(){
        $scope.obj.data = JSON.stringify($scope.infoobj);
		saveCategory.save($scope.obj, function(res){
            if(res.errcode != 0){
                alert(res.errmsg);
                return;
            }
            alert('操作成功');
            $state.go('app.categorylist');
		});
	};

    // 上级分类列表
	$scope.pidlist = function(){
        findPidList.save({},function(res){
            if(res.errcode === 0){
                console.log(res);
                $scope.pid_list = res.data;
            } else {
                alert(res.errmsg);
            }
        })
	}
	$scope.pidlist();

	// 分类字典列表
	$scope.typelist = function(){
		findDictionaryList.save({},function(res){
            if(res.errcode === 0){
                console.log(res);
                $scope.dicc_list = res.data.results;
            } else {
                alert(res.errmsg);
            }
        })
	}
	$scope.typelist();
    

	//取消
	$scope.cancel = function () {
        $state.go('app.categorylist');		
	};


	

 };






