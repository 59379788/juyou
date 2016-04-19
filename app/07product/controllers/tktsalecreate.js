module.exports = function($scope, $state, viewlist, salecreate, sale_id, goodlist, saledetailcreate, saledetaillist, saledetaildelete, salehalfinsert, salehalfinfo){

	$scope.saleobj = {};
	$scope.salehalfobj = {};
	$scope.saleobjstate = 1;			//编辑状态
	$scope.saleobjdetailstate = 0;		//隐藏状态
	$scope.salehalfobjstate = 1;		

	//初始化值
	$scope.saleobj.sms_type = '0';
	$scope.saleobj.sys_affirm_type = '0';
	$scope.saleobj.pay_type = '0';
	$scope.saleobj.stock_type = '0';
	$scope.saleobj.sale_target_type = '0';
	$scope.saleobj.state = '0';
	

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

    //基本信息 保存
	var id;		//创建完生成的id
	$scope.salego = function(){

		salecreate.save($scope.saleobj, function(res){

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
				//通过商品code取id
				sale_id.get({'code' : $scope.saleobj.code}, function(res){
					if(res.errcode === 0)
					{
						id = res.data.id;
						$state.go('app.editsale', {'id' : id});
					}
					else
					{
						alert(res.errmsg);
					}
				});
				
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
	};

	//基本信息 编辑
	$scope.saleedit = function(){
		$state.go('app.editsale', {'id' : id});
	}

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

	//半价信息	保存
	$scope.salehalfgo = function(){
		$scope.salehalfobj.code = $scope.saleobj.code;
		salehalfinsert.save($scope.salehalfobj, function(res){

			if(res.errcode === 0)
			{
				$scope.salehalfobjstate = 0;
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	//半价信息 编辑
	$scope.salehalfedit = function(){
		$state.go('app.editsale', {'id' : id});
	}
	
};