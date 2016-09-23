module.exports = function($scope, $state, $stateParams, cardproduct, cardproductinfo,
	dictbytypelist, cardresources, cardresourcesinsert, cardresourcesdel, cardpoollist,
	cardproductpoolinsert, cardproductpooldel, cardproduct_cardpoollist,
	cardproduct_ticketlist, cardproductticketinsert, cardproductticketdel
	){

	var code = $stateParams.code;

	$scope.obj = {};

	$scope.resobj = {
		'product_code' : code,
		'sub_table_code' : 'pool',
		'sub_table_used_type' : 0,
		'sub_table_data_type' : 0
	};

	$scope.cardpoolobj = {
		'pool_product_code' : code
	};

	$scope.ticketobj = {
		'ticket_product_code' : code
	}

	$scope.resources = [
		// {
		// 	//'title' : '卡池',
		// 	'sub_table_code' : 'pool',
		// 	'sub_table_used_type' : 0,
		// 	'sub_table_data_type' : 1
		// }
	];

	$scope.resourcesflag = {};



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

    dictbytypelist({'type' : 'bookline_type'}).then(function(res) {
    	//console.log(res);
        if(res.errcode === 0)
        {
        	$scope.cardtypearr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

	if(code === '')   //新建
    {
		$scope.obj = {
			'market_price' : 0,
			'guide_price' : 0,
			'pay_type' : 0,
			'stock_type' : 0,
			'current_stock_num' : 0,
			'max_limit' : -1,
			'max_limit_type' : 0,
			'realname_type' : 0
		};

		
    }
    else  
    {
    	_getBaseInfo();

    	_getResourcesInfo();

    	_getcardproduct_cardpoollist();

    	_getcardpoollist();



    	_getcardproduct_ticket();
    }

	
    //卡产品信息提交
	$scope.gogo = function(){


		cardproduct.save($scope.obj, function(res){

			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			alert('保存成功');

		});


	}

	//卡产品资源添加
	$scope.resourcesok = function(){

		cardresourcesinsert.save($scope.resobj, function(res){

			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			_getResourcesInfo();
			$scope.resourcesflag[$scope.resobj.sub_table_code] = {};

		});
	}


	//卡产品资源删除
	$scope.resourcesdel = function(sub_table_code){

		if(!confirm("你确信要删除该资源吗～～～～"))
	    {
	 		return;
	    }

		cardresourcesdel.save({'sub_table_code' : sub_table_code, 'product_code' : code}, function(res){
			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			delete $scope.resourcesflag[sub_table_code];
			_getResourcesInfo();
			
		});
	}


	$scope.cardpoolok = function(code){

		cardproductpoolinsert.save($scope.cardpoolobj, function(res){

			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			_getcardproduct_cardpoollist();
		});

	};


	$scope.cardpooldel = function(pool_code){

		if(!confirm("你确信要删除该卡池资源吗～～～～"))
	    {
	 		return;
	    }

		cardproductpooldel.save({'pool_product_code' : code, 'pool_code' : pool_code}, function(res){

			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			_getcardproduct_cardpoollist();
		});

	}



	$scope.ticketok = function(code){

		cardproductticketinsert.save($scope.ticketobj, function(res){

			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			_getcardproduct_ticket();
		});

	};


	$scope.ticketdel = function(ticket_code){

		if(!confirm("你确信要删除该卡销售品吗～～～～"))
	    {
	 		return;
	    }

		cardproductticketdel.save({'ticket_product_code' : code, 'ticket_code' : ticket_code}, function(res){

			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			_getcardproduct_ticket();
		});

	}





	function _getBaseInfo(){

		cardproductinfo.save({'code' : code}, function(res){

    		//console.log(res);

    		if(res.errcode !== 0)
    		{
    			alert(res.errmsg);
    			return;
    		}

    		$scope.obj = res.data;

    	});

	}

	function _getResourcesInfo() {
		cardresources.save({'product_code' : code}, function(res){

    		//console.log(res);

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
	function _getcardproduct_cardpoollist(){
		cardproduct_cardpoollist.save({'ticket_product_code' : code}, function(res){

    		console.log(res);

    		if(res.errcode !== 0)
    		{
    			alert(res.errmsg);
    			return;
    		}

    		$scope.cardproduct_cardpoollistarr = res.data;
    		
    	});

	}

	function _getcardpoollist(){
		cardpoollist.save({}, function(res){

    		//console.log(res);

    		if(res.errcode !== 0)
    		{
    			alert(res.errmsg);
    			return;
    		}

    		$scope.cardpoolarr = res.data;
    		
    	});
	}




	//获取卡产品下绑定的票列表
	function _getcardproduct_ticket(){
		cardproduct_ticketlist.save({'ticket_product_code' : code}, function(res){

    		console.log(res);

    		if(res.errcode !== 0)
    		{
    			alert(res.errmsg);
    			return;
    		}

    		$scope.cardproduct_ticketarr = res.data;
    		
    	});

	}




    
};