module.exports = function($scope, viewlist){

	$scope.saleobj = {};
	$scope.saleobjstate = 1;			//编辑状态
	$scope.goodsobjdetailstate = 0;		//隐藏状态

	//初始化值
	$scope.saleobj.sms_type = '0';
	$scope.saleobj.sys_affirm_type = '0';
	$scope.saleobj.pay_type = '0';
	$scope.saleobj.stock_type = '0';
	$scope.saleobj.sale_target_type = '0';
	$scope.saleobj.state = '0';

	/*//基本信息 商品状态下拉
	$scope.statearr = goodsstate;
	$scope.goodsobj.state=$scope.statearr[0].statecode;*/
	

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

    /*//详细信息 票种属性下拉
	attrlistsel().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.tktarr = res.data;
        	$scope.goodsobj.ticketattr=$scope.tktarr[0].ticket_attr_id;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    //基本信息 保存
	var id;		//创建完生成的id
	$scope.goodsgo = function(){

		$scope.goodsobj.ticketattr=$scope.tktarr[0].ticket_attr_id;

		goodscreate.save($scope.goodsobj, function(res){

			if($scope.goodsobj.code === undefined || $scope.goodsobj.code == '')
			{
				alert('商品编号不能为空');
				return;
			}

			if($scope.goodsobj.name === undefined || $scope.goodsobj.name == '')
			{
				alert('商品名称不能为空');
				return;
			}

			var view = $scope.goodsobj.place_code;

			if(res.errcode === 0)
			{
				$scope.goodsobjstate = 0;
				$scope.goodsobjdetailstate = 1;
				//通过商品code取id
				sel_id.get({'code' : $scope.goodsobj.code}, function(res){
					if(res.errcode === 0)
					{
						id = res.data.id;
					}
					else
					{
						alert(res.errmsg);
					}
				});
				
				//详细信息 通过景区编号获取票种类型下拉
			    typelist.get({'view' : view.substring(1)}, function(res){
					if(res.errcode === 0){
						$scope.typearr = res.data;
						$scope.goodsobj.ticket_type=$scope.typearr[0].code;
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
	$scope.goodsedit = function(){
		$state.go('app.editgoods', {'id' : id});
	}

	//详细信息	添加
	$scope.add = function(){

		goodsdetailcreate.save($scope.goodsobj, function(res){

	     	if(res.errcode === 0)
	     	{
	     		$scope.load($scope.goodsobj.code);
	     	}

	    });

	};

	//详细信息	查询
	$scope.load = function (code) {
		goodsdetaillist.get({'goods_code' : code}, function(res){
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
		goodsdetaildelete.get({'id' : id}, function(res){
			if(res.errcode === 0)
			{
				$scope.load($scope.goodsobj.code);
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}*/
	
};