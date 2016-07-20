module.exports = function($scope, code, obj, createBackOrder, $uibModalInstance){

	console.log(obj);
	console.log(code);

	if(obj.ticketarr.length !== 1)
	{
		alert('票信息有误，数组大小有问题。');
		$uibModalInstance.dismiss('cancel');
	}

	var ticket = obj.ticketarr[0];

	$scope.num = 0;

	console.log(ticket);
	
	//退票按钮
    $scope.ok = function () {

    	if(!angular.isNumber($scope.num))
    	{
    		alert('请输入数字');
    		return;
    	}

    	var backnum = parseInt($scope.num);

    	if(backnum <= 0)
    	{
    		alert('请输入正确数量');
    		return;
    	}

    	// alert($scope.num);
    	// alert(ticket.inCount);
    	// alert(ticket.used1);
    	// alert(ticket.back1);
    	if($scope.num > ticket.inCount - ticket.used1 - ticket.back1)
    	{
    		alert('退票数量大于可退数量');
    		return;
    	}

    	var para = {
	        'order_code' : code,
	        //'sequence' : obj.sequence,
	        'back_count' : $scope.num
	    };


	    if (!confirm("确定要退 " + ticket.order_name + ' 中 ' + backnum + ' 张吗？')) {
	        return false;
	    }

	    createBackOrder.save(para, function(res){
	        console.log(res);
	        if(res.errcode === 0)
	        {
	            alert('退票申请已提交，等待系统确认。');
	            $uibModalInstance.close();
	        }
	        else
	        {
	            alert(res.errmsg);
	        }
	    });
		
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

};