module.exports = function($scope, $state, $resource,findArticleList,StartArticleState,DisableArticleState,ITEMS_PERPAGE,toaster){
	$scope.obj = {};
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
	$scope.info = {
		'type' : '3'
	}
	 $scope.getlist = function(){
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
        }; 
		para = angular.extend(para,$scope.info);
        findArticleList.save(para,function(res){
            console.log(para);
            if(res.errcode != 0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

        })

    }

    $scope.getlist();

	$scope.add = function(){
		$state.go('app.addTrafficArtical');
	}

	$scope.edit = function(id){
		$state.go('app.addTrafficArtical',{'id' : id});		
	}

	$scope.start = function(id){
		StartArticleState.save({'id' : id}, function(res){
			if(res.errcode != 0){
				alert(res.errmsg);
				return;
			}
			$scope.getlist();
		});
	}

	$scope.disable = function(id){
		DisableArticleState.save({'id' : id}, function(res){
			if(res.errcode != 0){
				alert(res.errmsg);
				return;
			}
			$scope.getlist();
		});
	}

};






