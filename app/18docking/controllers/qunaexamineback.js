module.exports = function($scope, $uibModalInstance, partnerorderid, refundseq, 
	updateOrderRefundAgree, updateOrderRefundNotAgree){

	var para = {
		'partnerorderid' : partnerorderid,
		'refundseq' : refundseq
	};
	
	$scope.ok = function(){
		updateOrderRefundAgree.save(para, function(res){

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
		updateOrderRefundNotAgree.save(para, function(res){

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