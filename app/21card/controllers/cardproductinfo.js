module.exports = function($scope, $state, $stateParams, cardproductinfo,cardresources,cardproduct_cardpoollist,cardproduct_ticketlist){
	var id = $stateParams.id;
	console.log(id);

    

    cardproductinfo.save({'id': id}, function(res){ 
   	if (res.errcode !== 0) { 
   		alert(res.errmsg);
   		return;
   	} 
     	$scope.obj = res.data;
     	console.log($scope.obj);
     	 _getResourcesInfo(res.data.code);
     	 _getcardproduct_cardpoollist(res.data.code);
     	 _getcardproduct_ticket(res.data.code);
        
        

        if ($scope.obj.card_type === "1") { 
        	$scope.obj.card_type = '散客拼团';
        } else if ($scope.obj.card_type === "2") {
            $scope.obj.card_type = '独立成团'; 
        } else if ($scope.obj.card_type === "3") { 
        	$scope.obj.card_type = '自由行';
        } else if ($scope.obj.card_type === "4") { 
        	$scope.obj.card_type = '自由驾';
        }


    });
    


    // 获取资源列表
	function _getResourcesInfo(code) {
		
		cardresources.save({'product_code' : code}, function(res){
            console.log({'product_code' : code});
    		console.log(res);

    		if(res.errcode !== 0)
    		{
    			alert(res.errmsg);
    			return;
    		}

    		$scope.resources = res.data;
    		console.log($scope.resources);
    		for(var i = 0, j = res.data.length; i < j; i++)
    		{
    			var tmp = res.data[i];
    			$scope.resourcesflag[tmp.sub_table_code] = {};
    		}
    		console.log($scope.resourcesflag);
    	});
	}

    //获取卡产品下绑定的卡池列表
	function _getcardproduct_cardpoollist(code){
		cardproduct_cardpoollist.save({'pool_product_code' : code}, function(res){

    		console.log(res);

    		if(res.errcode !== 0)
    		{
    			alert(res.errmsg);
    			return;
    		}

    		$scope.cardproduct_cardpoollistarr = res.data;
    		
    	});

	}

	//获取卡产品下绑定的票销售品列表
	function _getcardproduct_ticket(code){
		cardproduct_ticketlist.save({'ticket_product_code' : code}, function(res){
    		
            
    		if(res.errcode !== 0)
    		{
    			alert(res.errmsg);
    			return;
    		}

    		$scope.cardproduct_ticketarr = res.data;
    		console.log($scope.cardproduct_ticketarr);
    		
    	});

	}

	


};