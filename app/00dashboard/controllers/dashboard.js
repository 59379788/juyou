module.exports = function ($scope, noticelist, ITEMS_PERPAGE, $uibModal, noticeinfo,
    userinfo, getSellerInfoByCode, $state) {

        
	console.log("%c 居游 %c 做地球上最具互联网性、创新性、专业有爱的团队。 \xa9 2015-%d", 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;', "font-size:12px;color:#999999;", (new Date).getFullYear());


    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.load = function () {

        var para = {
            pageNo: $scope.bigCurrentPage,
            pageSize: $scope.itemsPerPage
        };

        noticelist.get(para, function (res) {

            if (res.errcode === 0) {
                $scope.objs = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;
            }
            else {
                alert(res.errmsg);
            }

        });

    };
    $scope.load();


    //打开模态框
    $scope.info = function (id) {

        var modalInstance = $uibModal.open({
            template: require('../views/noticeinfo.html'),
            controller: 'noticeinfo',
            resolve: {
                id: function () {
                    return id;
                },
                noticeinfo: function () {
                    return noticeinfo;
                }
            }
        });

        modalInstance.result.then(function () {
            //load();
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
    }


    //用户信息
    userinfo().then(function (res) {
        $scope.userobj = res;

        getSellerInfoByCode.get({ 'company_code': $scope.userobj.company_code }, function (res) {
            if (res.errcode === 0) {
                $scope.userobj.balance_price = res.data.balance_price;
            }
            else {
                //alert(res.errmsg);
            }
        });

    });


    $scope.detail = function (obj) {
        $state.go('app.trackinfo');
    }


};