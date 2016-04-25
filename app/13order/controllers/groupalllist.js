module.exports = function($scope, groupalllist, ITEMS_PERPAGE, getDate){

    $scope.searchform = {};

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = {};

    $scope.today = function() {
        $scope.section.start.date = new Date();
    };
    $scope.today();
    $scope.open = function(obj) {
        obj.opened = true;
    };

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
            arrival_date : getDate($scope.section.start.date)
        };

        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        groupalllist.save(para, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                $scope.objs = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };
    $scope.load();

};