module.exports = function($scope, getOrderSimInfo, agencyOrderUsed){

	$scope.searchform = {};
	$scope.usedobj={};
	$scope.state = 0;
    
    $scope.load = function () {
        
        $scope.state = 0;
        getOrderSimInfo.save($scope.searchform, function(res){
        	console.log($scope.searchform);
         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	if(res.data.repCode !== '1')
     		{
     			alert(res.data.repMsg);
         		return;
     		}

     		var result = res.data.order;

     		switch(res.data.order.orderStatus)
     		{
     			case '1' : 
 					result.orderStatus = '等待付款';
 					break;
				case '2' : 
 					result.orderStatus = '等待审核';
 					break;
				case '3' : 
 					result.orderStatus = '已付款';
 					break;
				case '5' : 
 					result.orderStatus = '已出票';
 					break;
				case '8' : 
 					result.orderStatus = '退订审核中';
 					break;
				case '9' : 
 					result.orderStatus = '改签审核中';
 					break;
				case '15' : 
 					result.orderStatus = '交易完成';
 					break;
				case '20' : 
 					result.orderStatus = '交易取消';
 					break;
			}

         	$scope.obj = result;

         	agencyOrderUsed.save($scope.searchform, function(res){

	         	console.log(res);
				
	         	if(res.errcode !== 0)
	         	{
	         		alert("数据获取失败");
	         		return;
	         	}

	         	if(res.data.repCode !== '1')
	     		{
	     			$scope.usedobj.orderUsed = '0';
	         		return;
	     		}

	         	$scope.usedobj = res.data;

	        });

         	$scope.state = 1;

        });

        

    };

};