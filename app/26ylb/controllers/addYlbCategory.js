module.exports = function($scope, $state, $stateParams, $resource,saveCategory,findPidList,findDictionaryList,getCategory){

    var id = $stateParams.id;
    console.log(id);
    if(id){
        getCategory.save({'id' : id},function(res){
            if(res.errcode === 0){
				console.log(res);                
                $scope.obj = res.data;
			}else{
				alert(res.errmsg);
			}
        })
    }
    $scope.obj = {
        'data' : ''
    };
    $scope.infoobj = {};

	$scope.save = function(){
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






