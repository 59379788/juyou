module.exports = function ($resource, $state, $http, $q, toaster, $uibModal) {
    return {
        restrict: 'AE',
        template: require('../views/supply_ziwoyou.html'),
        replace: true,
        scope: {
            changeState: '='
        },
        link: function ($scope, $elements, $attrs, $ctrls) {
            
            /* 分页
            * ========================================= */
            $scope.maxSize = 5;            //最多显示多少个按钮
            $scope.bigCurrentPage = 1;      //当前页码
            $scope.itemsPerPage = 10;         //每页显示几条

            $scope.load = function () {
                $resource("/api/uc/dc/ziwoyouService/getProductList", {}, {}).save({ 
                        sale_belong: "supply_ziwoyou",
                        pageNo: $scope.bigCurrentPage,
                        pageNum: $scope.itemsPerPage }, function (res) {
                    if (res.errcode === 0) {
                        // for (var i = 0; i < res.data.length; i++) {
                        //     if (res.data[i].DataJson === undefined || res.data[i].DataJson.length === 0) {
                        //         res.data[i].flag = "无";
                        //     }
                        //     else {
                        //         res.data[i].flag = "有";
                        //     }
                        // }
                        $scope.objs = res.data.products.product;
                        $scope.bigTotalItems = res.data.totalNum;
                    }
                    else {
                        alert(res.errmsg);
                    }
                });
            }

            $scope.info = function (productNo) {

                var modalInstance = $uibModal.open({
                    template: require('../views/ziwoyou_detailinfo.html'),
                    controller: 'ziwoyou_detailinfo',
                    url: '/productdetailinfo',
                    size: 'lg',
                    resolve: {
                        'productNo': function () {
                            return productNo;
                        }
                    }
                });

                modalInstance.opened.then(function () {// 模态窗口打开之后执行的函数  
                    // $scope.load();
                });
                modalInstance.result.then(function (showResult) {

                }, function (reason) {
                    // $state.go("app.dockingproduct", {}, { reload: true });
                });
            }

            $scope.$watch('changeState', function (newvalue, oldValue) {
                $scope.load();
            }, true);

        }
    };
};

