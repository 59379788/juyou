module.exports = function($scope,  createmechanism, $uibModalInstance, create, createdeposit){
	$scope.ok = function () {
    console.log($scope.name);
    //'name' : $scope.name
        createmechanism.save({}, {'name' : $scope.name}, function(res){
            console.log(res);
            if(res.errcode === 0)
            {
                //alert(res.errmsg);
                //$uibModalInstance.close();
                _createdeposit(res.errmsg);
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


    function _createdeposit(seller_code){
    	//Object {loan_limit_price: 0, picket_line: 0, seller_code: "LA00015"}
    	var para = {
    		'loan_limit_price' : 0,
    		'picket_line' : 0,
    		'seller_code' : seller_code
    	}
		createdeposit.save(para, function(res){

			console.log(res);
			if(res.errcode === 0)
			{
				alert('添加成功');
				$uibModalInstance.close();
			}
			else
			{
				alert(res.errmsg);
			}

		});

    }



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