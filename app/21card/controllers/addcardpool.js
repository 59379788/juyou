module.exports = function($scope, addcardpool){

	$scope.savecardpool = function(){

		//alert('2222');
		/*var para = {
			'name' : $scope.user.username,
			'lottry' : $scope.user.lotter,
			'mobile' : $scope.user.mobile,
			'period' : $scope.user.period
		};*/
		$scope.cardinfo = {
			'pool_code' : '',
			'pool_name' : '',
			'pool_type' : '',
			'company_code' : '',
			'sys_area' : ''

			

		};

		addcardpool.save($scope.cardinfo, function(res){
			console.log(res);
			    //alert('hfdkh');
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	alert('保存成功');
			    	return;
			    }
     	});                
	};

};