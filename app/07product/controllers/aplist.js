module.exports = function ($scope, $state, $resource, ITEMS_PERPAGE, $uibModal, str2date, date2str, toaster


) {

    $scope.searchform = {};

    $scope.create = function () {
        $state.go('app.newproduct');
    };

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    

	$scope.myKeyup = function (e) {

		//IE 编码包含在window.event.keyCode中，Firefox或Safari 包含在event.which中
		var keycode = window.event ? e.keyCode : e.which;
		if (keycode == 13) {
			$scope.load();
		}
	};

    $scope.load = function () {

        var para = {
            pageNo: $scope.bigCurrentPage,
            pageSize: $scope.itemsPerPage
        };

        para = angular.extend($scope.searchform, para);

        $resource('/api/ac/tc/ticketSaleService/getApplySaleList', {}, {})
            .save(para, function (res) {

                console.log(res);
                if (res.errcode !== 0) {
                    toaster.error({ title: "提示", body: res.errmsg });
                    return;
                }

                $scope.objs = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;

            });

    };
    $scope.load();




    $scope.info = function (id) {

        //$state.go('app.editsale', {'id' : id, 'type' : 'info'});

        var modalInstance = $uibModal.open({
            template: require('../views/productInfo.html'),
            controller: 'productInfo',
            url: '/productInfo/:id',
            size: 'lg',
            resolve: {
                'productid': function () {
                    return id;
                },
                str2date: function () {
                    return str2date;
                },
                date2str: function () {
                    return date2str;
                },
                auditing: function () {
                    return true;
                }

            }
        });
        modalInstance.opened.then(function () {// 模态窗口打开之后执行的函数  
            // $scope.load();
        });
        modalInstance.result.then(function (showResult) {
            $scope.load();
        }, function (reason) {
            // // click，点击取消，则会暑促cancel  
            // $log.info('Modal dismissed at: ' + new Date());
        });

    };






};