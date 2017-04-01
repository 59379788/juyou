module.exports = function($scope, $uibModalInstance, code, cardinfo){
    
    //卡信息
    cardinfo.get({'code' : code}, function(res){

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