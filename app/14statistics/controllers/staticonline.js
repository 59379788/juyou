module.exports = function($scope, staticonline, getDate){
	
	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 10;         //每页显示几条
	
	
	$scope.searchform = {};
    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();

    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.card_sum = 0;
    
    //初始化
    $scope.load = function() {
    	
    	$scope.searchform.starttime = getDate($scope.section.start.date) + ' 00:00:00';
    	$scope.searchform.endtime = getDate($scope.section.end.date) + ' 23:59:59';
        var para = {
        pageNo:$scope.bigCurrentPage, 
        pageSize:$scope.itemsPerPage
        };
        para = angular.extend($scope.searchform, para);
    	staticonline.save(para, function(res){


            if(res.errcode === 0) {
        		$scope.objs = res.data.results;
        		$scope.bigTotalItems = res.data.totalRecord;
                if (res.data.results.length) {
                     $scope.card_sum = res.data.results[0].card_sum;
                }
            } else {
                alert(res.errmsg);
            }

        });
    }
    $scope.load();
    
    //日期控件开关
    $scope.open = function(obj) {
        obj.opened = true;
    };
}