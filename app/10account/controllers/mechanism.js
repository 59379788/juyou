module.exports = function($scope,  createmechanism, $uibModalInstance, create){
	$scope.ok = function () {
	console.log($scope.name);
        createmechanism.save({'name' : $scope.name}, {}, function(res){
            console.log(res);
            if(res.errcode === 0)
            {
                alert(res.errmsg);
                $uibModalInstance.close();
            }
            else
            {
              	alert(res.errmsg);
            }
        });
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };



    // function createaccount()
    // {
    // 	var para = {};
    // 	para.no = $scope.obj.loginName;
    //     para.loginName = code + $scope.obj.loginName;
    //     para.newPassword = '000000';
    //     para.confirmNewPassword = '000000';
    //     para['company.id'] = officeid;
    //     para['office.id'] = officeid;
    //     para.loginFlag = '1';

    //     create.save(para, {}, function(res){

    //         console.log(res);

    //         $uibModalInstance.close(officeid, officename);

    //     });
    // }

};