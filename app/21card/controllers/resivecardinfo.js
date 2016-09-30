module.exports = function($scope, $stateParams, used, lost, cardnumuser){
	//alert('sfsfa');
	var poolcode = $stateParams.poolcode;
    console.log(poolcode);

    $scope.cardinfo = {
    	'cardno' : ''
    };
    $scope.userinfo = {
    	'username' : '',
    	'mobile' : '',
    	'papersno' : '',
    	'card_status_z' : '',
    	'pool_code' : ''
    };
    // 用卡号查询用户信息
    $scope.queryuser = function(){
    	
    	cardnumuser.save({'cardno' : $scope.cardinfo.cardno}, function(res){
    		console.log($scope.cardinfo.cardno);
			
			console.log(res);
			$scope.userinfo = res.data;
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			//$scope.cardpoollists = res.data;
		});
    };


    // 置为已用
    $scope.used = function(){
    	
    	used.save({'cardno' : $scope.cardinfo.cardno}, {'pool_code' : $scope.userinfo.pool_code}, function(res){
			console.log($scope.cardinfo.cardno);
            console.log($scope.userinfo.pool_code);
			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			//$scope.cardpoollists = res.data;
		});
    };

    // 挂失
    $scope.lost = function(){
    	//alert('挂失');
    	lost.save({'cardno' : $scope.cardinfo.cardno}, {'pool_code' : $scope.userinfo.pool_code}, function(res){
            console.log($scope.cardinfo.cardno);
            console.log($scope.userinfo.pool_code);
			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			//$scope.cardpoollists = res.data;
		});
    };
    //$scope.getlist();*/
};