module.exports = function($scope, $http, $q, $state,$stateParams, $resource,FileUploader,saveArticle,getArticle,FileUploader){

    var id = $stateParams.id;
    console.log(id);
    $scope.obj = {
        'type' : '3',
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
            $state.go('app.historylist');
		});
	};

    

    $scope.change = function(pid) {
        console.log(pid);
    }
	//取消
	$scope.cancel = function () {
		$state.go('app.historylist');
	};


 };






