module.exports = function($scope, $stateParams, goodlist, getattrbycode, usersubsibyquery, signup){

	$scope.num = 1;

	//人员数组
	$scope.objs = [];

	//人员补贴（key：电话，value：补贴额)
	var allsubsidy = {};

	//商品可用补贴额
	var goodssubsidy = 0;

	//普通商品编号
	var goodscode = '';

	//政府补贴商品编号
	var goodscodegov = '';

	//添加人员
	$scope.add = function(){
		var num = $scope.num;
		if(!angular.isNumber(num))
		{
			alert('请输入数字');
			return;
		}

		for(var i = 0; i < num; i++)
		{
			var obj = {
				'name' : '',
				'mobile' : '',
				'cardno' : '',
				'goodsid' : '',
				'disabled' : false
			};
			$scope.objs.push(obj);
		}
	};

	//商品列表
	goodlist.get({'code' : $stateParams.code}, function(res){
		console.log(res);
		if(res.errcode === 0)
		{
			$scope.goodarr = res.data;
			console.log(res.data);
			for(var i = 0; i < res.data.length; i++)
			{
				var tmp = res.data[i];
				console.log(tmp);
				if(tmp.type_attr === '98')
				{
					goodssubsidy = tmp.govsubsidy_price;
					goodscodegov = tmp.goods_code;
				}
				else
				{
					goodscode = tmp.goods_code;
				}
			}
			console.log($scope.goodarr);
		}
		else
		{
			alert(res.errmsg);
		}
	});

	//电话失去焦点
	$scope.blur = function(index){
		getsubsiby($scope.objs[index]);
	};

	//删除信息
	$scope.del = function(index){
		$scope.objs.splice(index,1); 
	};

	//手动选择商品
	$scope.change = function(obj){

		choosegoods(obj);
	};

	//获取补贴信息
	function getsubsiby(obj)
	{
		usersubsibyquery.get({'mobile' : obj.mobile}, function(res){

			console.log(res);
			if(res.errcode === 0)
			{
				obj.name = res.data.username;
				obj.cardno = res.data.papersno;
				obj.disabled = true;
				allsubsidy[obj.mobile] = res.data.generalsubsidy;
			}
			else
			{
				if(obj.disabled)
				{
					obj.disabled = false;
					obj.name = '';
					obj.cardno = '';
				}
			}
			choosegoods(obj);

		});
	}

	//根据游客政府补贴选择商品，
	//有补贴可以选择非补贴商品
	//无补贴不可以选择补贴商品
	function choosegoods(obj, what){
		//游客电话
		var mobile = obj.mobile;
		//游客补贴
		var subsidy = allsubsidy[mobile] || 0;

		console.log(subsidy);
		console.log(goodssubsidy);
		//可以用补贴
		if(subsidy >= goodssubsidy)
		{
			obj.goods_code = goodscodegov;
		}
		else
		{
			obj.goods_code = goodscode;
		}

	}


	return;

	var sale_code;			//销售品编号
	var cost_price;			//成本价
	var pay_price;			//单价（扣完补贴的）
	var govsubsidy_price;	//限用补贴额
	var btye;				//用户补贴余额
	var def;				//下拉列表默认选中值（第一项）

	$scope.signobj = {};
	$scope.objs = {};

	

	/*var data = new Array();
	var xx;*/

	//初始化查询商品下拉列表
	$scope.load = function(){
	    goodlist.get({'code' : $stateParams.code}, function(res){
			console.log(res);
			if(res.errcode === 0)
			{
				$scope.goodarr = res.data;
				def = $scope.goodarr[0].goods_code;
	        	$scope.signobj.goods_code = $scope.goodarr[0].goods_code;
	        	cost_price = res.data[0].cost_price * 0.01;
	        	govsubsidy_price = res.data[0].govsubsidy_price * 0.01;
	        	$scope.cost_price = cost_price;
	        	pay_price = cost_price;
	        	sale_code = res.data[0].sale_code;

	        	/*for(var i = 0; i < 1; i++)
				{
					xx = new Array();
					xx.sale_code =  def;
					data.push(xx);
				}

				$scope.objs = data;
				console.log(data);*/
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}
	$scope.load();

	$scope.change = function(goods_code){
		getattrbycode.get({'code' : goods_code}, function(res){
			console.log(res);
			if(res.errcode === 0)
			{
				if(res.data.attr == '98'){
					if($scope.signobj.mobile === undefined || $scope.signobj.mobile == '')
					{
						alert('请输入手机号');
						$scope.signobj.goods_code = $scope.goodarr[0].goods_code;
						return;
					}
					//查询补贴余额
					usersubsibyquery.get({'mobile' : $scope.signobj.mobile}, function(res){
						
						if(res.errcode === 0)
						{
							btye = res.data.generalsubsidy * 0.01;
							if(btye < govsubsidy_price) {
								alert('补贴余额不足，无法选择补贴团票');
								$scope.signobj.goods_code = $scope.goodarr[0].goods_code;
							}
							if(btye > govsubsidy_price) {
								cost_price -= govsubsidy_price;
								$scope.cost_price = cost_price;
								pay_price = cost_price;
								cost_price += govsubsidy_price;
							} else {
								cost_price -= btye;
								$scope.cost_price = cost_price;
								pay_price = cost_price;
								cost_price += btye;
							}
						}
						else
						{
							alert(res.errmsg);
							$scope.signobj.goods_code = $scope.goodarr[0].goods_code;
						}
					});
				}else{
					$scope.cost_price = cost_price;
					pay_price = cost_price;
				}
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	$scope.blur = function(){
		getattrbycode.get({'code' : $scope.signobj.goods_code}, function(res){
			console.log(res);
			if(res.errcode === 0)
			{
				if(res.data.attr == '98'){
					$scope.load();
				}
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	/*$scope.add = function(){
		xx = new Array();
		xx.sale_code =  def;
		data.push(xx);
	}*/



	//提交
	var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	$scope.go = function(){

		if($scope.signobj.mobile === undefined || $scope.signobj.mobile == '')
		{
			alert('请输入手机号');
			$scope.signobj.goods_code = $scope.goodarr[0].goods_code;
			return;
		}
		if(!reg.test($scope.signobj.mobile))
		{
			alert('手机号码错误');
			return;
		}

        var list_map = new Array();
        var mapone = {};
        mapone['name'] = $scope.signobj.name;
        mapone['mobile'] = $scope.signobj.mobile;
        mapone['goods_code'] = $scope.signobj.goods_code;
        mapone['pay_price'] = pay_price * 100;
        list_map.push(mapone);

		var map = {};
		map['infolist'] = list_map;
		map['order_code'] = $stateParams.code;
		map['sale_code'] = sale_code;
		map['all_price'] = pay_price * 100;
        console.log(map);

	    signup.save(map, function(res){

	        if(res.errcode === 0)
	        {
	            alert("提交成功");
	            $scope.load();
	        }
	        else
	        {
	            alert(res.errmsg);
	        }

	    });
	}

};
