module.exports = function($scope, $uibModalInstance, partnerorderid, updateOrderRefundAgree, updateOrderRefundNotAgree){

	$scope.ok = function(){
		updateOrderRefundAgree.save({'partnerorderid' : partnerorderid}, function(res){

	        if(res.errcode === 0)
	        {
	        	alert("审核通过");
	        	$uibModalInstance.close();
	        }
	        else
	        {
	            alert(res.data.errmsg);
	        }


		});
	}
    
	$scope.cancel = function(){
		updateOrderRefundNotAgree.save({'partnerorderid' : partnerorderid}, function(res){

	        if(res.errcode === 0)
	        {
	        	alert("审核不通过");
	        	$uibModalInstance.close();
	        }
	        else
	        {
	            alert(res.data.errmsg);
	        }


		});
	}
    
};