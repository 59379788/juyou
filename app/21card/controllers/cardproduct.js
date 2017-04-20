module.exports = function($scope, $state, $stateParams, cardproduct, cardproductinfo,
	dictbytypelist, cardresources, cardresourcesinsert, cardresourcesdel, cardpoollists,
	cardproductpoolinsert, cardproductpooldel, cardproduct_cardpoollist,
	cardproduct_ticketlist, cardproductticketinsert, cardproductticketdel,cardpoollist,
	$uibModal, saleticketinfo, getRedPacketProductlist
	){

	$scope.selection = function (obj) {
       code.log(obj);
	}

	var id = $stateParams.code;
	console.log(id);
	var state = $stateParams.editstate;
	
	$scope.code = '';
	$scope.obj = {};
	// 卡产品资源
	$scope.resobj = {
		'product_code' : '',
		'sub_table_code' : 'pool',
		'sub_table_used_type' : 0,
		'sub_table_data_type' : 0
		
	};
    // 卡池
	$scope.cardpoolobj = {
		'pool_code' : '',//卡池编号
		'pool_product_code' : ''
		
	};
    // 销售品
	$scope.ticketobj = {
		'ticket_product_code' : ''
	};

    
	$scope.resources = [
		// {
		// 	//'title' : '卡池',
		// 	'sub_table_code' : 'pool',
		// 	'sub_table_used_type' : 0,
		// 	'sub_table_data_type' : 1
		// }
	];

	$scope.resourcesflag = {};
	$scope.cardproduct_cardpoollistarr = [];


	dictbytypelist({'type' : 'card_product_sub_table'}).then(function(res) {
    	//console.log(res);
        if(res.errcode === 0)
        {
        	$scope.subtablearr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
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

    /*getRedPacketProductlist({}).then(function(res) {
    	//console.log(res);
        if(res.errcode === 0)
        {
        	$scope.redtypearr = res.data;
        //	console.log($scope.cardtypearr);
        }
        else
        {
            alert(res.errmsg);
        }
    });*/

    getRedPacketProductlist.get({}, function(res){
    	console.log(res);
		if (res.errcode !== 0) {
			alert(res.errmsg);
			return;
		}
		$scope.redtypearr = res.data;

	});

	if(id === '')   //新建卡产品
    {
		$scope.obj = {
			'id' : '',
			'name' : '',
			'card_type' : '',
			'market_price' : 0,
			'guide_price' : 0,
			'pay_type' : 0,
			'stock_type' : 0,
			'current_stock_num' : 0,
			'max_limit' : -1,
			'max_limit_type' : 0,
			'realname_type' : 0,
			'rebate_type' : '0',
			'rebate_start' : '',
			'rebate_end' : '',
			'remarks' : ''
		};

		 _getcardpoollist();
		//_getResourcesInfo($scope.obj.code);
		
    }
    else  // 
    {
    	_getBaseInfo(); //编辑卡产品信息

    	// _getResourcesInfo();

    	// _getcardproduct_cardpoollist();

    	 //_getcardpoollist();



    	// _getcardproduct_ticket();
    }
    $scope.change = function(){
		$scope.obj.rebate_code = '';
    }

	
    var productcode = '';
    //卡产品信息提交

	$scope.gogo = function(){
            if ($scope.obj.name === '' || $scope.obj.card_type === '' ||$scope.obj.market_price===null ||$scope.obj.guide_price===null || $scope.obj.name===null) { 
            	alert('信息填写不完全');
            	return;
            } 
            cardproduct.save($scope.obj, function(res){
            console.log($scope.obj);
            

			//console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				
			} else { 
				alert('保存成功'); 
		
				// 卡产品资源
				$scope.resobj.product_code = res.data.code;
				// 票销售品
				//$scope.ticketobj.product_code = res.data.code;
				$scope.ticketobj.ticket_product_code = res.data.code;
				// 卡池
				$scope.cardpoolobj.pool_product_code = res.data.code;
				

		    }
			   

			if(id === '') 
			{
				//id = res.data.uuid;
				console.log(id);
			}
			$state.go('app.cardproduct', {'code' : id});

		    });          
	}
	
	

	//卡产品资源添加
	$scope.resourcesok = function(){
        if ($scope.resobj.product_code === '') { 
        	alert('没有创建卡产品，无法设置卡资源！');
        } else {
		cardresourcesinsert.save($scope.resobj, function(res){

			console.log($scope.resobj);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			_getResourcesInfo($scope.resobj.product_code);
			$scope.resourcesflag[$scope.resobj.sub_table_code] = {};

		});
		}
	}


	//卡产品资源删除
	$scope.resourcesdel = function(sub_table_code, code){

		if(!confirm("你确信要删除该资源吗～～～～"))
	    {
	 		return;
	    }

	    console.log({'sub_table_code' : sub_table_code, 'product_code' : code});
		cardresourcesdel.save({'sub_table_code' : sub_table_code, 'product_code' : code}, function(res){
			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			delete $scope.resourcesflag[sub_table_code];
			_getResourcesInfo($scope.resobj.product_code);
			
		});
	}
   

    //添加卡池
	$scope.cardpoolok = function(){
        if ($scope.cardpoolobj.pool_code === '') { 
        	alert('请选择卡池');
        } else { 
		cardproductpoolinsert.save($scope.cardpoolobj, function(res){
            console.log($scope.cardpoolobj);
			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			console.log($scope.cardpoolobj.pool_product_code);
			_getcardproduct_cardpoollist($scope.cardpoolobj.pool_product_code);
		});
        } 


	};


	$scope.cardpooldel = function(pool_code){

		if(!confirm("你确信要删除该卡池资源吗～～～～"))
	    {
	 		return;
	    }
		cardproductpooldel.save({'pool_product_code' : $scope.cardpoolobj.pool_product_code, 'pool_code' : pool_code}, function(res){

			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			_getcardproduct_cardpoollist($scope.cardpoolobj.pool_product_code);
		});

	}


    // 销售品添加
	$scope.ticketok = function(code){
		if ($scope.ticketobj.ticket_code === undefined) {
		    alert('销售品编号不能为空！'); 
		} else {
 
		cardproductticketinsert.save($scope.ticketobj, function(res){
            console.log($scope.ticketobj);
			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			_getcardproduct_ticket($scope.ticketobj.ticket_product_code);
		});
		}

	};


	$scope.ticketdel = function(ticket_code){

		if(!confirm("你确信要删除该卡销售品吗～～～～"))
	    {
	 		return;
	    }

		cardproductticketdel.save({'ticket_product_code' : $scope.ticketobj.ticket_product_code, 'ticket_code' : ticket_code}, function(res){

			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			_getcardproduct_ticket($scope.ticketobj.ticket_product_code);
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





	function _getBaseInfo(){

        //根据id获取卡产品信息
		cardproductinfo.save({'id' : id}, function(res){

    		console.log(res);

    		if(res.errcode !== 0)
    		{
    			alert(res.errmsg);
    			return;
    		}

    		$scope.obj = res.data;
    		console.log($scope.obj);

    		$scope.resobj.product_code = $scope.obj.code;

    		$scope.cardpoolobj.pool_product_code = $scope.obj.code;
	
			$scope.ticketobj.ticket_product_code = $scope.obj.code;

	
            // 获取卡资源列表
    		_getResourcesInfo($scope.obj.code);
            // 获取卡产品绑定卡池列表
	    	_getcardproduct_cardpoollist($scope.obj.code);
            // 获取卡池列表
	    	_getcardpoollist($scope.obj.code);
            // 获取绑定的销售品编号
	    	_getcardproduct_ticket($scope.obj.code);


    	});

	}

    // 获取资源列表
	function _getResourcesInfo(code) {
		//console.log($scope.saveproduct);
		cardresources.save({'product_code' :code}, function(res){
            console.log({'product_code' : code});
    		console.log(res);

    		if(res.errcode !== 0)
    		{
    			alert(res.errmsg);
    			return;
    		}

    		$scope.resources = res.data;
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
    // 获取卡池列表
	function _getcardpoollist(){
		cardpoollists.save({}, function(res){
        //alert('获取卡池');
    		

    		if(res.errcode !== 0)
    		{
    			alert(res.errmsg);
    			return;
    		}

    		$scope.cardpoolarr = res.data;
    		
    		console.log(res);
    		
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

    $scope.submit = function(){ 
    	$state.go('app.cardproductlist');
    };


    
};