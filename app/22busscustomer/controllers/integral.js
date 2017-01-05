module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findSaleList,updateIntegral){   
	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    // $scope.info = {
    // 	'state' : '0'
    // };
    $scope.getlist = function () {
    	var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
       // para = angular.extend($scope.info, para);
    	findSaleList.save(para,function(res){
    		console.log(para);
    		if (res.errcode !== 0) {
    			alert(res.errmsg);
    			return;
    		}
 			console.log(res);
 			$scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;
    	});
    };
    $scope.getlist();

    
    $scope.addgoods = function() {
        $state.go('app.addintegralgoods');
    };

    $scope.delete = function(id){
        updateIntegral.save({'id': id},function(){
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            alert('删除成功！');
            $scope.getlist();
        });
    };

    $scope.update = function(id){
        $state.go('app.addintegralgoods',{'id' : id});
    };


};