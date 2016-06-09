module.exports = function($scope, id, noticeinfo, $uibModalInstance){

    noticeinfo.get({'id' : id}, function(res){

        console.log(res);
        if(res.errcode === 0)
        {
            $scope.obj = res.data;
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