module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findhelplist,updatestate){   
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
    	findhelplist.save(para,function(res){
    		console.log(para);
    		if (res.errcode !== 0) {
    			toaster.success({title: "", body:res.errmsg});
    			return;
    		}
 			console.log(res);
 			$scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;
    	});
    };
    $scope.getlist();

    $scope.agree = function(id) {
        if (confirm('您确定同意吗？')) {
            updatestate.save({'state':'1','id':id},function(res) {
                console.log({'state':'1','id':id});
                if (res.errcode !== 0) {
                    toaster.success({title: "", body:res.errmsg});
                    return;
                } 
                console.log(res);
                toaster.success({title: "", body:"申请成功"});
                $scope.getlist();
            });
            return;
        } 
        
    };

    $scope.disagree = function(id) {
        updatestate.save({'state':'2','id':id},function(res) {
            console.log({'state':'2','id':id});
            if (res.errcode !== 0) {
                toaster.success({title: "", body:res.errmsg});
                return;
            } 
            console.log(res);
            toaster.success({title: "", body:"成功!"});
            $scope.getlist();
        });
        
    };

    $scope.creatactivity = function(id) {
        $state.go('app.loveactionapply',{'id':id});
    };


};