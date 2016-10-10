/**
*卡订单详情
*ml
*/

module.exports = function($scope, $stateParams, cardproductorderinfo){

	//参数code
	var code = $stateParams.code;

	cardproductorderinfo.save({'code' : code}, function(res){
	    if (res.errcode !== 0) {
           alert(res.errmsg);
           return;
	    }
	    $scope.obj = res.data;
 	}); 
};