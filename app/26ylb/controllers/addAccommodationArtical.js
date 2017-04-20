module.exports = function($scope, $http, $q, $state,$stateParams, $resource,FileUploader,saveArticle,getArticle,FileUploader){

    var id = $stateParams.id;
    console.log(id);
    $scope.obj = {
        'type' : '5',
        'data' : ""
    };
    $scope.infoobj = {};
    if(id){
        getArticle.save({'id' : id}, function(res){
            if(res.errcode != 0){
                alert(res.errmsg);
                return;
            }
            console.log(res);
            $scope.obj = res.data;
            $scope.infoobj = JSON.parse($scope.obj.data);
		});
    }

    var beforedata = {
        // 一级分类列表
        'pidList' : 
        $http({
            'method' : 'GET',
            'url' : '/api/ac/ic/categoryService/obtainCategory'
        }),
        // 分类信息
        'articalinfo' : 
        $http({
            'method' : 'GET',
            'url' : '/api/as/ic/article/getArticle',
            'params' : {'id' : id}
        }),

    };

    $q.all(beforedata).then(function(res){
        //  alert('alllll');
        console.log(res);
        if(res.articalinfo.data.errcode === 0){
            console.log('xiangqing');
            console.log(res.articalinfo.data);
            $scope.obj = res.articalinfo.data.data;
            $scope.infoobj = JSON.parse($scope.obj.data);
        } else {
            
        }

        if(res.pidList.data.errcode === 0){
            console.log('shangjiiod');
            console.log(res.pidList.data.data);
            $scope.pid_list = res.pidList.data.data;
            var pidarray = $scope.pid_list;
            for(var i = 0; i < pidarray.length; i++){
                console.log(pidarray[i]);
                    pidarray[i].title = $scope.getgang(pidarray[i].pathNum)+pidarray[i].title;
                    // console.log(pidarray[i].title);
                    console.log($scope.getgang(pidarray[i].pathNum)+pidarray[i].title);
                
            }
        } else {
            return;
        }
    });
    $scope.getgang = function(num){
        console.log(num);
        var gang = '';
        for(var i =0; i < num; i++){
            gang = gang+'-';
            
        }
        return gang;
    }
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
        $scope.infoobj.picture1 = response.savename;
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
        $scope.infoobj.picture2 = response.savename;
    };
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
        $scope.infoobj.picture3 = response.savename;
    };



     

	$scope.save = function(){
        $scope.obj.data = JSON.stringify($scope.infoobj);  
        console.log($scope.obj);     
		saveArticle.save(($scope.obj), function(res){
            if(res.errcode != 0){
                alert(res.errmsg);
                return;
            }
            console.log(res);
            alert('操作成功');
            $state.go('app.accommodationlist');
		});
	};

    

    $scope.change = function(pid) {
        console.log(pid);
    }
	//取消
	$scope.cancel = function () {
		$state.go('app.accommodationlist');
	};


 };






