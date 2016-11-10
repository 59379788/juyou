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
    	'card_status_z' : ''
    };
    // 用卡号查询用户信息
    $scope.queryuser = function(){
    	
    	cardnumuser.save({'cardno' : $scope.cardinfo.cardno}, function(res){
    		console.log($scope.cardinfo.cardno);
			
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			$scope.obj = res.data;
            console.log($scope.obj);
		});
    };


    // 置为已用
    $scope.used = function(){
    	
    	used.save({'cardno' : $scope.cardinfo.cardno}, {'pool_code' : poolcode}, function(res){
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
    	lost.save({'cardno' : $scope.cardinfo.cardno}, {'pool_code' : $scope.userinfo.pool_code}, function(res){
            console.log({'cardno' : $scope.cardinfo.cardno}, {'pool_code' : $scope.obj.pool_code});
            
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			
		});
    
   };
}