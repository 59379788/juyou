module.exports = function($scope, $uibModalInstance, partnerorderid, refundseq, refundquantity, 
	updateOrderRefundAgree, updateOrderRefundNotAgree, createBackOrder){

	var para = {
		'partnerorderid' : partnerorderid,
		'refundseq' : refundseq,
		'refundquantity' : refundquantity
	};

	$scope.first = function(type){
		createBackOrder.save({'order_code' : partnerorderid,'seq_id' : refundseq,'back_count' : refundquantity}, function(res){

	        if(res.errcode === 0)
	        {
	        	if(type == '1'){
	        		$scope.ok();
	        	}else{
	        		$scope.cancel();
	        	}
	        }
	        else
	        {
	            alert(res.errmsg);
	        }


		});
	}
	
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