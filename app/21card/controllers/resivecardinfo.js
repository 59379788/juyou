module.exports = function($scope, $stateParams, used, lost, cardnumuser){
	//alert('sfsfa');
	var poolcode = $stateParams.poolcode;
    console.log(poolcode);

    $scope.cardinfo = {
    	'cardno' : ''
    };
    
    $scope.queryuser = function(){
    	
    	cardnumuser.save($scope.cardinfo.cardno, function(res){
			
			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			//$scope.cardpoollists = res.data;
		});
    };


    // 置为已用
    $scope.used = function(){
    	
    	used.save($scope.cardinfo.cardno, {'pool_code' : poolcode}, function(res){
			
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
    	lost.save($scope.cardinfo.cardno, {'pool_code' : poolcode}, function(res){

			console.log($scope.cardinfo.cardno);
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