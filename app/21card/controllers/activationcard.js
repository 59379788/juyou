/**
*卡订单详情
*ml
*/

module.exports = function($scope, $stateParams, getUserInfoByMobile,getProductByCardNoList,createProductOrderByCardNo){

    var cardno;
	$scope.card_num ;
	$scope.card_password ;
	$scope.opened = false ;
	var product_code;
	$scope.card_product = [];

	
	$scope.searchuser_info = function(mobile){

		//验证手机号
		if(!(/^1[34578]\d{9}$/.test(mobile))){ 
        alert("手机号码有误，请重填");  
        return ; 
   		};
		getUserInfoByMobile.save({'mobile' : mobile}, function(res){
		    if (res.errcode !== 0) {
	           alert(res.errmsg);
	           return;
		    }
		    $scope.user_info = res.data;
	 	}); 

	};


	$scope.searchcard_product = function(card_num){

		//验证卡号
		// if(!(/\b\d{12}\b/.test(card_num))){ 
  //       alert("卡号有误，请重填");  
  //       return ; 
  //  		};
		getProductByCardNoList.save({'card_num' : card_num}, function(res){
		    if (res.errcode !== 0) {
	           alert(res.errmsg);
	           return;
		    }
		    $scope.card_product = res.data;
	 	}); 

	};


	$scope.active_product = function(product_code){

		createProductOrderByCardNo.save({'userid':$scope.user_info.userid,'cardno':$scope.card_num,'card_password':$scope.card_password,'product_code':product_code},function(res){
			if (res.errcode !== 0) {
	           alert(res.errmsg);
	           return;
		    }else{
		    	alert("激活成功");
		    	$scope.opened = true;
		    	return;
		    }
		});
	};
	
};