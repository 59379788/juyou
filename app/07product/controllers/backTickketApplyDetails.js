module.exports = function ($scope, $state, $resource, ITEMS_PERPAGE, $stateParams, toaster, $uibModalInstance, item) {

    $scope.saleobj = {};
    $scope.saleobj.id = item.id;

    $scope.obj = item;

    scope.pass = function () {
        console.log(scope.saleobj.id);
        if (!$scope.saleobj.apply_note) {
            alert('审核意见必填');
            return false;
        }
        $resource('/api/ac/tc/ticketOrderBackService/updateApplyPass', {}, {})
            .save({
                'id': $scope.saleobj.id,
                'apply_note': $scope.saleobj.apply_note
            }, function (res) {
                console.log(res);
                if (res.errcode !== 0) {
                    alert(res.errmsg);
                    // toaster.error({ title: "提示", body: res.errmsg });
                    return;
                }
                // toaster.success({ title: "提示", body: "操作成功!" });
                alert("操作成功!");
                scope.util.$uibModalInstance.close();
            });
    };

    scope.nopass = function () {
        if (!$scope.saleobj.apply_note) {
            alert('审核意见必填');
            return false;
        }
        console.log(scope.saleobj.id);
        $resource('/api/ac/tc/ticketOrderBackService/updateApplyNoPass', {}, {})
            .save({
                'id': $scope.saleobj.id,
                'apply_note': $scope.saleobj.apply_note
            }, function (res) {
                console.log(res);
                if (res.errcode !== 0) {
                    alert(res.errmsg);
                    // toaster.error({ title: "提示", body: res.errmsg });
                    return;
                }
                // toaster.success({ title: "提示", body: "操作成功!" });
                alert("操作成功!");
                scope.util.$uibModalInstance.close();
            });
    };

};