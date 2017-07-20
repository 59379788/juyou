module.exports = function ($scope, productNo, $uibModalInstance, $resource) {
    $resource("/api/uc/dc/ziwoyouService/getProductInfoByCode", {}, {}).save({ productNo: productNo }, function (res) {
        if (res.errcode === 0) {
            $scope.obj = res.data.product;
        }
        else {
            alert(res.errmsg);
        }
    });
};