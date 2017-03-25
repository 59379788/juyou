module.exports = function($scope, $uibModalInstance, code, ticketinfo){
    
    //票信息
    ticketinfo.get({'code' : code}, function(res){

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