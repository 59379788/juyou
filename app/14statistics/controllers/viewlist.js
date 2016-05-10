module.exports = function($scope, $state, ITEMS_PERPAGE, getDate, 
    viewdestorystatisticlist, govsubsidygoodscodelist){

    $scope.searchform = {};

    $scope.total = {
        'buy' : 0,
        'used' : 0,
        'back' : 0,
        'total' : 0,
        'gov' : 0
    };

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();

    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

    /* 分页
     * ========================================= */
    // $scope.maxSize = 5;            //最多显示多少个按钮
    // $scope.bigCurrentPage = 1;      //当前页码
    // $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.load = function () {
        
        var para = {
            //pageNo:$scope.bigCurrentPage, 
            //pageSize:$scope.itemsPerPage,
            start_time : getDate($scope.section.start.date) + " 00:00:00",
            end_time : getDate($scope.section.end.date) + " 23:59:59"
        };

        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        viewdestorystatisticlist.save(para, function(res){

            console.log(res);

             $scope.total = {
                'buy' : 0,
                'used' : 0,
                'back' : 0,
                'total' : 0,
                'gov' : 0
            };

            if(res.errcode === 0)
            {
                $scope.objs = res.data;

                govsubsidygoodscodelist.get({}, function(res1){

                    //console.log(res1);
                    if(res1.errcode === 0)
                    {
                        $scope.subsidy = res1.data;
                        //console.log($scope.objs);
                        for(var i = 0, j = $scope.objs.length; i < j; i++)
                        {
                            var tmp = $scope.objs[i]
                            $scope.total.buy += tmp.buy;
                            $scope.total.used += tmp.used;
                            $scope.total.back += tmp.back;
                            $scope.total.total += tmp.cost_price * tmp.used;
                            tmp.gov = 0;
                            for(var m = 0, n = $scope.subsidy.length; m < n; m++)
                            {
                                if($scope.subsidy[m]['goods_code'] == tmp.goods_code)
                                {
                                    tmp.gov = $scope.subsidy[m]['govsubsidy_price'];
                                    break;
                                }
                            }
                            $scope.total.gov += tmp.gov * tmp.used;
                            
                        }

                        console.log($scope.total);
                    }
                    else
                    {
                        alert(res1.errmsg);
                    }
                });
                //$scope.bigTotalItems = res.data.totalRecord;
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };
    $scope.load();

    

};