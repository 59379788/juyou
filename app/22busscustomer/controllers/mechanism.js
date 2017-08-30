module.exports = function($scope,  createmechanism, $uibModalInstance, create, createdeposit, $http){
	$scope.ok = function () {
    console.log($scope.name);
    

    // $http({
    //        url:'http://dlqt.juyouhx.com/a/sys/office/ajaxsave',
    //        method: 'POST',   
    //        data: {'name' : $scope.name}
    //       }).success(function(res){
    //          console.log("11");
    //       }).error(function(){
    //        console.log("error");
    //       });


        $http({
            url: '/a/sys/office/ajaxsave',
            method: 'POST',
            data: {'name' : $scope.name}
            
        }).then(function (res) {
                 console.log('链接成功！');
             });

        // $http.post("http://dlqt.juyouhx.com/a/sys/office/ajaxsave")
        // .then(function (res) {
        //     console.log('链接成功！');
        // })
        // .catch(err => console.log(err));
    

        // createmechanism.save({'name' : $scope.name}, {}, function(res){
        //     console.log(res);
        //     if(res.errcode === 0)
        //     {
        //         //alert(res.errmsg);
        //         //$uibModalInstance.close();
        //         _createdeposit(res.errmsg);
        //     }
        //     else
        //     {
        //       	alert(res.errmsg);
        //     }
        // });
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