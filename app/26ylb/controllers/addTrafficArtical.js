module.exports = function($scope, $http, $q, $state,$stateParams, $resource,FileUploader,saveArticle){

    var id = $stateParams.id;
    console.log(id);
    $scope.obj = {
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
    

    

    var beforedata = {
        // 一级分类列表
        'pidList' : 
        $http({
            'method' : 'GET',
            'url' : '/api/as/ic/category/findPidList'
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
        } else {
            return;
        }
    });
     

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
            $state.go('app.trafficarticallist');
		});
	};

    

    $scope.change = function(pid) {
        console.log(pid);
    }
	//取消
	$scope.cancel = function () {
		$state.go('app.articallist');
	};


 };






