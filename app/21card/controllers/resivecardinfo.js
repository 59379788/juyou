module.exports = function($scope, $stateParams, used, lost, cardnumuser){
	//alert('sfsfa');
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
    $scope.queryuser = function(cardno){

    	if(cardno == '') {
    		alert("请输入卡号！");
    		return;
    	}

    	if(cardno.length != 12) {
    		alert("位数错误！");
    		return;
    	}
    	
    	cardnumuser.save({'cardno' : $scope.cardinfo.cardno}, function(res){
    		console.log($scope.cardinfo.cardno);
			
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			$scope.obj = res.data;
            $scope.lostinfo.pool_code = res.data.pool_code;
            $scope.lostinfo.cardno = cardno;
            console.log($scope.lostinfo.cardno);
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

    $scope.lostinfo = {
        'cardno' : '',
        'pool_code' : ''
    };
    // 挂失
    $scope.lost = function(){
        if (confirm('您确定要挂失吗?')) {
            lost.save($scope.lostinfo, function(res){
            console.log($scope.lostinfo);
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }

            $scope.queryuser();
        }); 
        } else { 
        }
   };
}