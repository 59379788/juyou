module.exports = function($scope, $uibModalInstance, code, saleticketinfo){

    //票种信息
    saleticketinfo.get({'sale_code' : code}, function(res){

        console.log(res);
        if(res.errcode === 0)
        {
            $scope.ticketarr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }

    });

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};