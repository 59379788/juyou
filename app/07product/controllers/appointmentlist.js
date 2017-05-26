module.exports = function ($scope, $stateParams, $state, $uibModal, ITEMS_PERPAGE,
    getDate, str2date, date2str, offstate, onstate, toaster, $resource) {
    /* 分页
      * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条



    $scope.searchForm = {
        'sale_name': '',
        'ticket_name': ''
    }

    $scope.search = function () {
        var para = {
            pageNo: $scope.bigCurrentPage,
            pageSize: $scope.itemsPerPage
        };
        para = angular.extend($scope.searchForm, para);
        $resource('/api/as/tc/appoint/findAppointList', {}, {}).save(para, function (res) {
            if (res.errcode != 0) {
                toaster.success({ title: "", body: res.errmsg });
                return;
            }
            // $scope.objs = res.data.results;
            var array = res.data.results;
            for (var i = 0; i < array.length; i++) {
                if (array[i].start_time) {
                    array[i].start_time = array[i].start_time.replace(/,/g, '<br/>');
                }
                if (array[i].sale_name) {
                    array[i].sale_name = array[i].sale_name.replace(/,/g, '<br/>');
                }
                if (array[i].sale_code) {
                    array[i].sale_code = array[i].sale_code.replace(/,/g, '<br/>');
                }
                if (array[i].ticket_code) {
                    array[i].ticket_code = array[i].ticket_code.replace(/,/g, '<br/>');
                }
                if (array[i].ticket_name) {
                    array[i].ticket_name = array[i].ticket_name.replace(/,/g, '<br/>');
                }
                if (array[i].stock_num) {
                    array[i].stock_num = array[i].stock_num.replace(/,/g, '<br/>');
                }
            }
            $scope.objs = array;
            $scope.bigTotalItems = res.data.totalRecord;

        });

    };
    $scope.search();

    $scope.add = function (id) {
        $state.go('app.setAppoint');
    };
    $scope.edit = function (id) {
        $state.go('app.setAppoint', { 'id': id });
    };
    $scope.delete = function (id) {
        if (confirm('确定要删除吗?')) {
            $resource('/api/as/tc/appoint/setAppointDel', {}, {}).save({ 'id': id }, function (res) {
                if (res.errcode != 0) {
                    toaster.error({ title: "", body: res.errmsg });
                    return;
                }
                $scope.search();
                toaster.success({ title: "", body: "删除成功!" });
            })
        }
    };
    $scope.seelist = function () {
        $state.go('app.customerList');
    };
    $scope.off = function (id) {
        $resource('/api/as/tc/appoint/setAppointDown', {}, {}).save({ 'id': id }, function (res) {
            if (res.errcode != 0) {
                toaster.error({ title: "", body: res.errmsg });
                return;
            }
            toaster.success({ title: "", body: "下架成功!" });
            $scope.search();
        })
    }
    $scope.on = function (id) {
        $resource('/api/as/tc/appoint/setAppointUp', {}, {}).save({ 'id': id }, function (res) {
            if (res.errcode != 0) {
                toaster.error({ title: "", body: res.errmsg });
                return;
            }
            toaster.success({ title: "", body: "上架成功!" });
            $scope.search();
        })
    }
};