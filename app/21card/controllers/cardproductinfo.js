module.exports = function($scope, $state, $stateParams, cardproductinfo,
	cardresources,cardproduct_cardpoollist,cardproduct_ticketlist,
	$uibModal, saleticketinfo, dictbytypelist
	){
	var id = $stateParams.id;
	
    cardproductinfo.save({'id': id}, function(res){ 
   	if (res.errcode !== 0) { 
   		alert(res.errmsg);
   		return;
   	} 
     	$scope.obj = res.data;
     	 _getResourcesInfo(res.data.code);
     	 _getcardproduct_cardpoollist(res.data.code);
     	 _getcardproduct_ticket(res.data.code);
        
        

        


    });

    dictbytypelist({'type' : 'card_sale_type'}).then(function(res) {
    	//console.log(res);
        if(res.errcode === 0)
        {
        	$scope.cardtypearr = res.data;
        //	console.log($scope.cardtypearr);
        }
        else
        {
            alert(res.errmsg);
        }
    });
    
    $scope.resourcesflag = {};

    // 获取资源列表
	function _getResourcesInfo(code) {
		cardresources.save({'product_code' : code}, function(res){
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
                console.log($scope.resourcesflag);
    		}
    		//console.log($scope.resourcesflag);
            
    	});
	}

    $scope.cardpoolflag = {};

    //获取卡产品下绑定的卡池列表
	function _getcardproduct_cardpoollist(code){
		cardproduct_cardpoollist.save({'pool_product_code' : code}, function(res){

    		if(res.errcode !== 0)
    		{
    			alert(res.errmsg);
    			return;
    		}

    		$scope.cardproduct_cardpoollistarr = res.data;
            console.log($scope.cardproduct_cardpoollistarr);
            for(var i = 0, j = res.data.length; i < j; i++)
            {
                var tmp = res.data[i];
                $scope.cardpoolflag[tmp.pool] = {};
                console.log($scope.cardpoolflag);
            }
    		
    	});

	}

    $scope.ticketflag = {};
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
            for(var i = 0, j = res.data.length; i < j; i++)
            {
                var tmp = res.data[i];
                $scope.ticketflag[tmp.ticket] = {};
                console.log($scope.ticketflag);
            }
    		
    	});

	}

	$scope.ticketinfo = function(code){

        var modalInstance = $uibModal.open({
          template: require('../views/saleticketinfo.html'),
          controller: 'saleticketinfo',
          size: 'lg',
          resolve: {
            code : function(){
                return code;
            },
            saleticketinfo : function(){
                return saleticketinfo;
            }
          }
        });

        modalInstance.result.then(function () {
          //load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

    };

	


};