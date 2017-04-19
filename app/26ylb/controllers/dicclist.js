module.exports = function($scope, $state, $resource,findDictionaryList,delDictionary,ITEMS_PERPAGE,toaster){
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
        findDictionaryList.save(para,function(res){
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
		$state.go('app.addYlbDicc');
	}

	$scope.edit = function(id){
		$state.go('app.addYlbDicc',{'id' : id});		
	}

	$scope.delete = function(id){
        if(confirm('确定要删除吗?')){
            delDictionary.save({'id' : id}, function(res){
                if(res.errcode != 0){
                    alert(res.errmsg);
                    return;
                }
                $scope.getlist();
            });
        }
		
	}

};






