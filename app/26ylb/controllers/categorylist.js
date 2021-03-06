module.exports = function($scope, $state, $resource,findCategoryList,updateStartState,updateDiasbleState,ITEMS_PERPAGE,deleteCategory,toaster){
	$scope.obj = {};
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
	
	 $scope.getlist = function(){
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
        };
        findCategoryList.save({},function(res){
            console.log(para);
            if(res.errcode != 0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
			// console.log('ahfjadhfhjadfad');
            console.log(res);
            $scope.objs = res.data;
            $scope.bigTotalItems = res.data.totalRecord;

        })

    }

    $scope.getlist();

	$scope.add = function(){
		$state.go('app.addYlbCategory');
	}

	$scope.edit = function(id){
		$state.go('app.addYlbCategory',{'id' : id});		
	}

	$scope.start = function(id){
		updateStartState.save({'id' : id}, function(res){
			if(res.errcode === 0){
				    $scope.getlist();
			}else{
				alert(res.errmsg);
			}
		});
	};

	$scope.disable = function(id){
		updateDiasbleState.save({'id' : id}, function(res){
			if(res.errcode === 0){
				    $scope.getlist();
			}else{
				alert(res.errmsg);
			}
		});
	};
	$scope.delete = function(id){
		if(confirm('确定要删除吗?')){
			deleteCategory.save({'id' : id},function(res){
				if(res.errcode === 0){
					$scope.getlist();
				}else{
					alert(res.errmsg);
				}
			})
		}
		
	}

};






