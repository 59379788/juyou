module.exports = function ($scope, $state, $resource, ITEMS_PERPAGE, $uibModal, str2date, date2str,
    saleup, saledown, saleupdate, talist, sellerListno, toaster, getDate

) {

    $scope.searchform = {};

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    // $scope.section.start.date = new Date();

    $scope.section.end = {};
    // $scope.section.end.date = new Date();

    $scope.open = function (obj) {
        obj.opened = true;
    };

    $scope.create = function () {
        $state.go('app.newproduct');
    };

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条


    $scope.load = function () {

        var para = {
            pageNo: $scope.bigCurrentPage,
            pageSize: $scope.itemsPerPage,
            start_time: getDate($scope.section.start.date),
            end_time: getDate($scope.section.end.date)
        };

        para = angular.extend($scope.searchform, para);

        $resource('/api/ac/tc/ticketOrderBackService/getApplyBackTicketList', {}, {})
            .save(para, function (res) {

                console.log(res);
                if (res.errcode !== 0) {
                    toaster.error({ title: "提示", body: res.errmsg });
                    return;
                }

                $scope.objs = res.data.results;
                for (var index = 0; index < $scope.objs.length; index++) {
                    switch ($scope.objs[index].ticket_state) {
                        case '1':
                            $scope.objs[index].ticket_state_name = '审核通过';
                            break;
                        case '2':
                            $scope.objs[index].ticket_state_name = '审核不通过';
                            break;
                        case '5':
                            $scope.objs[index].ticket_state_name = '待审核';
                            break;
                    
                        default:
                            $scope.objs[index].ticket_state_name = '';
                            break;
                    }
                }

                $scope.bigTotalItems = res.data.totalRecord;

            });

    };
    $scope.load();

    $scope.info = function (obj) {

        //$state.go('app.editsale', {'id' : id});

        var modalInstance = $uibModal.open({
            template: require('../views/backTickketApplyDetails.html'),
            controller: 'backTickketApplyDetails',
            url: '/product/backTickketApplyDetails',
            size: 'lg',
            resolve: {
                'item': function () {
                    return obj;
                }
            }
        });

        modalInstance.opened.then(function () {// 模态窗口打开之后执行的函数  
            // $scope.load();
        });
        modalInstance.result.then(function (showResult) {
            $scope.load();
        }, function (reason) {
            $scope.load();
            // // click，点击取消，则会暑促cancel  
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };

};