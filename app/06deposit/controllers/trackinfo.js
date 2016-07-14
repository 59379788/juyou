module.exports = function($scope, $state, $stateParams, trackinfo, ITEMS_PERPAGE){

	$scope.searchform = {};
	$scope.searchform.type = '';

    var seller_code = $stateParams.seller_code;

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
            'pageNo' : $scope.bigCurrentPage, 
            'pageSize' : $scope.itemsPerPage,
            'seller_code' : seller_code
        };

        para = angular.extend($scope.searchform, para);

        trackinfo.save(para, function(res){

            console.log(res);

            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }

            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

        });

    };
    $scope.load();

};