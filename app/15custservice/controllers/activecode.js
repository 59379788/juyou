/**
*根据电话查看激活码
*ml
*/

module.exports = function($scope, $stateParams, getActiveCodeByMobile){

	$scope.objs;

	$scope.search_activecode = function(mobile){

		//验证手机号
		if(!(/^1[34578]\d{9}$/.test(mobile))){ 
        alert("手机号码有误，请重填");  
        return ; 
   		};
		getActiveCodeByMobile.save({'mobile' : mobile}, function(res){
			console.log(mobile);
			console.log(res);
			console.log(mobile);
		    if (res.errcode !== 0) {
	           alert(res.errmsg);
	           return;
		    }
		    $scope.objs =  res.data;
		    // $scope.activecode_info = res.data[0].activecode;
		    // $scope.status = res.data[0].delfl;
		    // $scope.delflag = res.data[0].state;
	 	}); 
	};
};