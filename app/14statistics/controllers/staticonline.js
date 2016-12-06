module.exports = function($scope, staticonline, getDate){
	$scope.searchform = {};
    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();

    $scope.section.end = {};
    $scope.section.end.date = new Date();
    
    //初始化
    $scope.load = function() {
    	
    	$scope.searchform.starttime = getDate($scope.section.start.date) + ' 00:00:00';
    	$scope.searchform.endtime = getDate($scope.section.end.date) + ' 23:59:59';
    	
            console.log('111111111');
            console.log($scope.searchform);
            console.log('111111111');
    	staticonline.save($scope.searchform, function(res){


            if(res.errcode === 0) {
        		$scope.objs = res.data;
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