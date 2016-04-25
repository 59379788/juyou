module.exports = function($scope, $stateParams, viewlist, saleinfo, saleupdate, goodlist, saledetailcreate, saledetaillist, saledetaildelete, salehalfupdate, salehalfinfo, dictbytypelist){
	
	//销售品对象
	$scope.saleobj = {};
	//商品列表对象
	$scope.goodsobj = {};

	//基本信息 景区下拉
	viewlist().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    dictbytypelist({'type' : 'sale_category'}).then(function(res) {
    	console.log(res);
        if(res.errcode === 0)
        {
        	$scope.typearr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

	saleinfo.get({'id' : $stateParams.id}, function(res){
		console.log(res);

		if(res.errcode === 0)
		{
			$scope.saleobj = res.data;
			$scope.saleobj.market_price *= 0.01;
			$scope.saleobj.guide_price *= 0.01;
			$scope.saleobj.cost_price *= 0.01;

			// for(var i = 0; i < $scope.typearr.length; i++)
   //      	{
   //      		if($scope.typearr[i].value === $scope.saleobj.sale_category)
   //      		{
   //      			$scope.category = $scope.typearr[i].label;
   //      		}
   //      	}
			
			//初始化商品列表
			getsaledetail($scope.saleobj.code);

			$scope.goodsobj.place_code = $scope.saleobj.place_code;
			getgoodslist($scope.goodsobj.place_code);
		}
		else
		{
			alert(res.errmsg);
		}
	});


	function getgoodslist(place_code)
	{
		//详细信息 通过景区编号获取商品下拉
	    goodlist.get({'view' : place_code}, function(res){
	    	console.log(res);
			if(res.errcode === 0){
				$scope.goodsarr = res.data;
				if(res.data.length > 0) $scope.goodsobj.goods_code = res.data[0].code;
			}else{
				alert(res.errmsg);
			}
		});
	}

	//添加商品
	$scope.add = function(){

		if(!checkAdd($scope.goodsobj))
		{
			return;
		}
		
		$scope.goodsobj.code = $scope.saleobj.code;
		saledetailcreate.save($scope.goodsobj, function(res){

	     	if(res.errcode === 0)
	     	{
	     		getsaledetail($scope.saleobj.code);
	     	}
     		else
			{
				alert(res.errmsg);
			}

	    });

	};


	function getsaledetail(code){
		saledetaillist.get({'sale_code' : code}, function(res){
			if(res.errcode === 0)
			{
				console.log(res.data);
				$scope.objs = res.data;
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}
	

	function checkAdd(obj){

		if(obj.goods_code == null)
		{
			alert('请选择商品');
			return false;
		}

		if(!angular.isArray($scope.objs)) return false;

		for(var i = 0; i < $scope.objs.length; i++)
		{
			var tmp = $scope.objs[i];
			if(tmp.goods_code === obj.goods_code)
			{
				alert('不能添加重复商品！');
				return false;
			}
		}

		return true;
	}


	//详细信息	删除
	$scope.del = function(id){
		saledetaildelete.get({'id' : id}, function(res){
			if(res.errcode === 0)
			{
				getsaledetail($scope.saleobj.code);
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}


	//基本信息 保存
	$scope.salego = function(){

		if($scope.saleobj.name === undefined || $scope.saleobj.name == '')
		{
			alert('销售品名称不能为空');
			return;
		}
		$scope.saleobj.market_price *= 100;
		$scope.saleobj.guide_price *= 100;
		console.log($scope.saleobj);
		saleupdate.save($scope.saleobj, function(res){

			if(res.errcode === 0)
			{
				$scope.saleobj.market_price *= 0.01;
				$scope.saleobj.guide_price *= 0.01;
				alert('修改成功');
			}
			else
			{
				alert(res.errmsg);
			}
		});
	};


	$scope.change = function(code){
		getgoodslist(code);
	}



	// $scope.loadhalf = function(code){
	// 	//根据销售品编号获取半价信息
	// 	salehalfinfo.get({'code' : code}, function(res){
	// 		console.log(res);

	// 		if(res.errcode === 0)
	// 		{
	// 			$scope.salehalfobj = res.data;
	// 		}
	// 		else
	// 		{
	// 			//alert(res.errmsg);
	// 		}
	// 	});
	// }






	// //半价信息 保存
	// $scope.salehalfgo = function(){

	// 	$scope.salehalfobj.code = $scope.saleobj.code;
	// 	salehalfupdate.save($scope.salehalfobj, function(res){

	// 		if(res.errcode === 0)
	// 		{
	// 			$scope.salehalfobjstate = 0;
	// 		}
	// 		else
	// 		{
	// 			alert(res.errmsg);
	// 		}
	// 	});
	// };

	// //编辑半价信息改变状态
	// $scope.salehalfedit = function(){
	// 	$scope.salehalfobjstate = 1;
	// 	$scope.loadhalf(code);
	// };
	
};