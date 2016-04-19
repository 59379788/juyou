module.exports = function($scope, $stateParams, viewlist, saleinfo, saleupdate, goodlist, saledetailcreate, saledetaillist, saledetaildelete, salehalfupdate, salehalfinfo){

	$scope.saleobjstate = 0;			//编辑状态
	$scope.saleobjdetailstate = 1;		//隐藏状态
	$scope.salehalfobjstate = 0;		


	//基本信息 景区下拉
	viewlist().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        	$scope.saleobj.place_code=$scope.viewarr[0].code;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    
	//基本信息 上一页编辑获取信息
	$scope.loadmain = function(){
		saleinfo.get({'id' : $stateParams.id}, function(res){
			console.log(res);

			if(res.errcode === 0)
			{
				$scope.saleobj = res.data;
				$scope.loadhalf(res.data.code);
				$scope.load(res.data.code);

				//详细信息 通过景区编号获取商品下拉
			    goodlist.get({'view' : $scope.saleobj.place_code}, function(res){
					if(res.errcode === 0){
						$scope.goodarr = res.data;
						$scope.saleobj.goods_code=$scope.goodarr[0].code;
					}else{
						alert(res.errmsg);
					}
				});
				
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}
	$scope.loadmain();




	$scope.loadhalf = function(code){
		//根据销售品编号获取半价信息
		salehalfinfo.get({'code' : code}, function(res){
			console.log(res);

			if(res.errcode === 0)
			{
				$scope.salehalfobj = res.data;
			}
			else
			{
				//alert(res.errmsg);
			}
		});
	}

	//基本信息 保存
	$scope.salego = function(){

		saleupdate.save($scope.saleobj, function(res){

			if($scope.saleobj.code === undefined || $scope.saleobj.code == '')
			{
				alert('销售品编号不能为空');
				return;
			}

			if($scope.saleobj.name === undefined || $scope.saleobj.name == '')
			{
				alert('销售品名称不能为空');
				return;
			}

			if(res.errcode === 0)
			{
				$scope.saleobjstate = 0;
				$scope.saleobjdetailstate = 1;
				$scope.loadmain();
			}
			else
			{
				alert(res.errmsg);
			}
		});
	};

	//编辑基本信息改变状态
	$scope.saleedit = function(){
		$scope.saleobjstate = 1;
		$scope.loadmain();
		$scope.saleobjdetailstate = 0;
	};

	//详细信息	添加
	$scope.add = function(){

		saledetailcreate.save($scope.saleobj, function(res){

	     	if(res.errcode === 0)
	     	{
	     		$scope.load($scope.saleobj.code);
	     	}

	    });

	};

	//详细信息	查询
	$scope.load = function (code) {
		saledetaillist.get({'sale_code' : code}, function(res){
			if(res.errcode === 0)
			{
				$scope.objs = res.data;
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	//详细信息	删除
	$scope.del = function(id){
		saledetaildelete.get({'id' : id}, function(res){
			if(res.errcode === 0)
			{
				$scope.load($scope.saleobj.code);
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	//半价信息 保存
	$scope.salehalfgo = function(){

		$scope.salehalfobj.code = $scope.saleobj.code;
		salehalfupdate.save($scope.salehalfobj, function(res){

			if(res.errcode === 0)
			{
				$scope.salehalfobjstate = 0;
			}
			else
			{
				alert(res.errmsg);
			}
		});
	};

	//编辑半价信息改变状态
	$scope.salehalfedit = function(){
		$scope.salehalfobjstate = 1;
		$scope.loadhalf(code);
	};
	
};