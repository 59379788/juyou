module.exports = function($scope, $stateParams, viewlist, saleinfo, saleupdate, goodlist, 
	saledetailcreate, saledetaillist, saledetaildelete, dictbytypelist, FileUploader,
	salegovsubsidycreate, salegovsubsidyupdate, salegovsubsidyinfo, salecategorylist, 
	salejuyousubsidycreate, salejuyousubsidyupdate, salejuyousubsidyinfo){
	
	//销售品对象
	$scope.saleobj = {};
	//商品列表对象
	$scope.goodsobj = {};

	//功能模块对象
	$scope.funobj = {};

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

    var uploader1 = $scope.uploader1 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });
    uploader1.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    }); 
    uploader1.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.saleobj.top_pic = response.savename;
    };

    dictbytypelist({'type' : 'sale_category'}).then(function(res) {
    	//console.log(res);
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
			
			//初始化商品列表
			getsaledetail($scope.saleobj.code);

			$scope.goodsobj.place_code = $scope.saleobj.place_code;
			getgoodslist($scope.goodsobj.place_code);

			//获取功能模块
			getfun($scope.saleobj.sale_category, $scope.saleobj.code);
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
	    	//console.log(res);
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
				//console.log(res.data);
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
		$scope.saleobj.cost_price *= 100;
		//console.log($scope.saleobj);
		saleupdate.save($scope.saleobj, function(res){

			if(res.errcode === 0)
			{
				$scope.saleobj.market_price *= 0.01;
				$scope.saleobj.guide_price *= 0.01;
				$scope.saleobj.cost_price *= 0.01;
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


	//查询所有的功能模块
	function getfun(code, salecode){

		salecategorylist.get({'sale_category_code' : code}, function(res){

			console.log(res);
			if(res.errcode === 0)
			{
				for(var i = 0; i < res.data.length; i++)
				{
					var tmp = res.data[i];
					$scope.funobj[tmp.sub_table_code] = {};
					$scope.funobj[tmp.sub_table_code]['name'] = tmp.sub_table_name;
					$scope.funobj[tmp.sub_table_code]['has'] = true;
					if(tmp.sub_table_code === 'govsubsidy')
					{
						getgovsubsidy(salecode, $scope.funobj[tmp.sub_table_code]);
					}
					else if(tmp.sub_table_code === 'juyousubsidy')
					{
						getjuyousubsidy(salecode, $scope.funobj[tmp.sub_table_code]);
					}
				}
			}
			else
			{
				alert(res.errmsg);
			}

		});

	}

	//查询政府补贴
	function getgovsubsidy(code, obj){
		//console.log({'govsubsidy_sale_code' : code});
		salegovsubsidyinfo.get({'govsubsidy_sale_code' : code}, function(res){

			if(res.errcode === 10003)
			{
				obj['has'] = false;
			}
			else
			{
				$scope.govobj = res.data;
			}

		});

	}
	
	$scope.govcreate = function(){
		var para = {
			'govsubsidy_sale_code' : $scope.saleobj.code,
			'govsubsidy_price' : $scope.govobj.govsubsidy_price
		};
		//console.log(para);
		salegovsubsidycreate.save(para, function(res){
			//console.log(res);
			if(res.errcode === 0)
			{
				alert('ok');
				getfun($scope.saleobj.sale_category, $scope.saleobj.code);
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	$scope.govupdate = function(){
		var para = {
			'govsubsidy_sale_code' : $scope.saleobj.code,
			'govsubsidy_price' : $scope.govobj.govsubsidy_price
		};
		console.log(para);
		salegovsubsidyupdate.save(para, function(res){
			console.log(res);
			if(res.errcode === 0)
			{
				alert('ok');
				getfun($scope.saleobj.sale_category, $scope.saleobj.code);
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	//查询居游补贴
	function getjuyousubsidy(code, obj){
		console.log({'juyousubsidy_sale_code' : code});
		salejuyousubsidyinfo.get({'juyousubsidy_sale_code' : code}, function(res){
			console.log(res);
			if(res.errcode === 10003)
			{
				obj['has'] = false;
			}
			else
			{
				$scope.juyouobj = res.data;
			}

		});

	}
	
	$scope.juyoucreate = function(){
		var para = {
			'juyousubsidy_sale_code' : $scope.saleobj.code,
			'juyousubsidy_price' : $scope.juyouobj.juyousubsidy_price
		};
		console.log(para);
		salejuyousubsidycreate.save(para, function(res){
			//console.log(res);
			if(res.errcode === 0)
			{
				alert('ok');
				getfun($scope.saleobj.sale_category, $scope.saleobj.code);
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	$scope.juyouupdate = function(){
		var para = {
			'juyousubsidy_sale_code' : $scope.saleobj.code,
			'juyousubsidy_price' : $scope.juyouobj.juyousubsidy_price
		};
		//console.log(para);
		salejuyousubsidyupdate.save(para, function(res){
			//console.log(res);
			if(res.errcode === 0)
			{
				alert('ok');
				getfun($scope.saleobj.sale_category, $scope.saleobj.code);
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}
	
};