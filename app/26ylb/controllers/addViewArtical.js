module.exports = function($scope, $http, $q, $state,$stateParams, $resource,saveArticle,getArticle,findDictionaryList,FileUploader){

    var id = $stateParams.id;
    console.log(id);
    $scope.obj = {
        'category_id' : '',
        'type' : '1',
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
    // $scope.getdiclist = function(){
    //     findDictionaryList.save({'pageSize' : '100', 'pageNo' : '1'}, function(res){
    //         if(res.errcode != 0){
    //             alert(res.errmsg);
    //             return;
    //         }
    //         console.log(res);
    //         $scope.pid_list = res.data.results;
	// 	});
    // }
    // $scope.getdiclist();
    
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
        $scope.infoobj.headimg = response.savename;
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
            $state.go('app.viewarticallist');
		});
	};

    

    $scope.change = function(pid) {
        console.log(pid);
    }
	//取消
	$scope.cancel = function () {
		$state.go('app.articallist');
	};

    $scope.image = function(){
		var para = $state.get('app.imageupload');

        var modalInstance = $modal.open(para);
        modalInstance.opened.then(function() {// 模态窗口打开之后执行的函数  
            console.log('modal is opened');  
        });  
        modalInstance.result.then(function(result) {  
            console.log(result);  
            $scope.imagearr = JSON.stringify(result);
            // form.result['templete_lock_data_json'] = JSON.stringify(result.lock);
            // form.result['templete_check_data_json'] = result.unlock;

        }, function(reason) {  
            console.log(reason);// 点击空白区域，总会输出backdrop  
            // click，点击取消，则会暑促cancel  
            $log.info('Modal dismissed at: ' + new Date());  
        }); 
	};

    $scope.viewimage = function(){
		var para = $state.get('app.imageupload');

        var modalInstance = $modal.open(para);
        modalInstance.opened.then(function() {// 模态窗口打开之后执行的函数  
            console.log('modal is opened');  
        });  
        modalInstance.result.then(function(result) {  
            console.log(result);  
            $scope.infoobj.viewimage = result;
            // $scope.imagearr = JSON.stringify(result);
            // form.result['templete_lock_data_json'] = JSON.stringify(result.lock);
            // form.result['templete_check_data_json'] = result.unlock;

        }, function(reason) {  
            console.log(reason);// 点击空白区域，总会输出backdrop  
            // click，点击取消，则会暑促cancel  
            $log.info('Modal dismissed at: ' + new Date());  
        }); 
	};

    $scope.meiimage = function(){
		var para = $state.get('app.imageupload');

        var modalInstance = $modal.open(para);
        modalInstance.opened.then(function() {// 模态窗口打开之后执行的函数  
            console.log('modal is opened');  
        });  
        modalInstance.result.then(function(result) {  
            console.log(result); 
            $scope.infoobj.meiimage = result;
             
            // $scope.imagearr = JSON.stringify(result);
            // form.result['templete_lock_data_json'] = JSON.stringify(result.lock);
            // form.result['templete_check_data_json'] = result.unlock;

        }, function(reason) {  
            console.log(reason);// 点击空白区域，总会输出backdrop  
            // click，点击取消，则会暑促cancel  
            $log.info('Modal dismissed at: ' + new Date());  
        }); 
	};
     $scope.aerialimage = function(){
		var para = $state.get('app.imageupload');

        var modalInstance = $modal.open(para);
        modalInstance.opened.then(function() {// 模态窗口打开之后执行的函数  
            console.log('modal is opened');  
        });  
        modalInstance.result.then(function(result) {  
            console.log(result);  
            $scope.infoobj.aerialimage = result;
            
            // $scope.imagearr = JSON.stringify(result);
            // form.result['templete_lock_data_json'] = JSON.stringify(result.lock);
            // form.result['templete_check_data_json'] = result.unlock;

        }, function(reason) {  
            console.log(reason);// 点击空白区域，总会输出backdrop  
            // click，点击取消，则会暑促cancel  
            $log.info('Modal dismissed at: ' + new Date());  
        }); 
	};


	

 };






