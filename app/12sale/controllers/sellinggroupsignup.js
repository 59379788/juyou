module.exports = function($scope, $state, code, plan_count, goodlist, infolist,
	getattrbycode, usersubsibyquery, signup, $uibModalInstance){

	$scope.num = 1;

	//人员数组
	$scope.objs = [];

	//销售品编号
	var sale_code = '';

	//人员补贴（key：电话，value：补贴额)
	var allsubsidy = {};

	//商品可用补贴额
	var goodssubsidy = 0;

	//商品信息（key：编号，value：价格)
	var goods = {};

	//普通商品编号
	var goodscode = '';
	var payprice = '0';

	//政府补贴商品编号
	var goodscodegov = '';
	var paypricegov = '0';

	//预定人数全局变量
	var count = 1;

	//总价
	$scope.totalprice = 0;

	//添加人员
	$scope.add = function(){
		var num = $scope.num;
		if(!angular.isNumber(num))
		{
			alert('请输入数字');
			return;
		}

		row(num);
	};

	

	//初始化 商品列表
	goodlist.get({'code' : code}, function(res){
		console.log(res);
		if(res.errcode === 0)
		{
			$scope.bookingnotes = res.data[0].bookingnotes;
			$scope.goodarr = res.data;
			console.log(res.data);
			for(var i = 0; i < res.data.length; i++)
			{
				var tmp = res.data[i];
				if(i === 0) sale_code = tmp.sale_code;
				if(tmp.type_attr === '98')
				{
					//补贴额
					goodssubsidy = tmp.govsubsidy_price;
					goodscodegov = tmp.goods_code;
					paypricegov = tmp.cost_price - tmp.govsubsidy_price;
					goods[goodscodegov] = paypricegov;
				}
				else
				{
					goodscode = tmp.goods_code;
					payprice = tmp.cost_price;
					goods[goodscode] = payprice;
				}

			}
			console.log($scope.goodarr);
		}
		else
		{
			alert(res.errmsg);
		}
	});

	//初始化 获取预定信息
	/*infolist.get({'code' : code}, function(res){
		console.log(res);
		if(res.errcode === 0)
		{
			var tmp = res.data;
			
			if(tmp == ""){
				row(plan_count);
				return;
			}
			if(tmp.length < plan_count){
				row(plan_count - tmp.length);
			}
		}
		else
		{
			alert(res.errmsg);
		}
	});

	function initusersubsibyquery(obj){
		var subsidy = 0;
		usersubsibyquery.get({'mobile' : obj.mobile}, function(res){
			if(res.errcode === 0)
			{
				if(res.data.isexis === '0')
				{
					obj.subsidy = 0;
				}
				else
				{
					obj.subsidy = res.data.generalsubsidy;
				}	
			}
		});
		return subsidy;

	}*/

	//电话失去焦点
	$scope.blur = function(index){
		getsubsiby($scope.objs[index]);
	};

	//删除信息
	$scope.del = function(index){
		$scope.objs.splice(index,1); 
		calctotalprice();
	};

	//手动选择商品
	$scope.change = function(obj){
		choosegoods(obj, 1);
	};

	//gogogogoogogo
	$scope.go = function(){

		//检查infolist
		var msg = '';
		for(var i = 0; i < $scope.objs.length; i++)
		{
			var tmp = $scope.objs[i];
			if(tmp.goods_code === '')
			{
				$scope.objs.splice(i, 1);
				i--;
				continue;
			}

			msg += '电话:' + tmp.mobile + ',姓名:' + tmp.name + ',身份证:' + tmp.cardno + '\r\n';
		}

		msg = '报名信息确认\r\n' + msg + '\r\n\r\n总计' + $scope.totalprice * 0.01 + '元'; 

		if(!confirm(msg))
		{
			return;
		}

		var para = {
			'infolist' : $scope.objs,
			'order_code' : code,
			'sale_code' : sale_code,
			'all_price' : $scope.totalprice
		};

		console.log(para);
		signup.save(para, function(res){
			console.log(res);

	        if(res.errcode === 0)
	        {
	            alert("提交成功");
	            $uibModalInstance.close();
	            //$state.go('app.infosellinggroup', {'code' : code});
	        }
	        else
	        {
	            alert(res.errmsg);
	        }

	    });
	};

	//获取补贴信息
	function getsubsiby(obj)
	{
		usersubsibyquery.get({'mobile' : obj.mobile}, function(res){

			console.log(res);
			if(res.errcode === 0)
			{
				if(res.data.isexis === '0')
				{
					if(obj.disabled)
					{
						obj.disabled = false;
						obj.name = '';
						obj.cardno = '';
						obj.subsidy = 0;
					}
				}
				else
				{
					obj.name = res.data.username;
					obj.cardno = res.data.papersno;
					obj.disabled = true;
					obj.subsidy = res.data.generalsubsidy;
					allsubsidy[obj.mobile] = res.data.generalsubsidy;
				}
				
			}
			
			choosegoods(obj);

		});
	}

	//根据游客政府补贴选择商品，
	//what : 1,手动选择商品
	//有补贴可以选择非补贴商品
	//无补贴不可以选择补贴商品
	function choosegoods(obj, what){
		//游客电话
		var mobile = obj.mobile;
		//游客补贴
		var subsidy = allsubsidy[mobile] || 0;

		console.log(subsidy);
		console.log(goodssubsidy);
		console.log(what);

		//手动
		if(what == 1)
		{
			if(subsidy < goodssubsidy)
			{
				obj.goods_code = goodscode;
				obj.pay_price = payprice;
				obj.usesubsidy = 0;
			}
		}
		else
		{
			if(subsidy >= goodssubsidy)
			{
				obj.goods_code = goodscodegov;
				obj.pay_price = paypricegov;
				obj.usesubsidy = goodssubsidy;
			}
			//不可以用补贴
			else
			{
				obj.goods_code = goodscode;
				obj.pay_price = payprice;
				obj.usesubsidy = 0;
			}
		}

		//手动改变下来，修改价格
		if(what == 1)
		{
			for(var i = 0, j = $scope.goodarr.length; i < j; i++)
			{
				var tt = $scope.goodarr[i];
				// console.log(tt);
				// console.log(tt.goods_code);
				// console.log(obj.goods_code);

				if(tt.goods_code == obj.goods_code)
				{
					if(tt.type_attr === '98')
					{
						obj.pay_price = tt.cost_price - tt.govsubsidy_price;
						obj.usesubsidy = tt.govsubsidy_price;
					}
					else
					{
						obj.pay_price = tt.cost_price;
						obj.usesubsidy = '0';
					}

					//console.log(obj);
					break;
				}
			}
		}

		calctotalprice();
	}

	//计算总价
	function calctotalprice(){

		$scope.totalprice = 0;
		console.log($scope.objs);
		for(var i = 0, j = $scope.objs.length; i < j; i++)
		{
			var tmp = $scope.objs[i];
			if(tmp.goods_code == '') continue;
			$scope.totalprice += parseInt(goods[tmp.goods_code]);
			

		}

	}

	$scope.cancel = function(){

		$uibModalInstance.close();
		
	}

	//添加一行

	function row(num){
		var j;
		for(var i = 1; i <= num; i++)
		{
			j = parseInt(count);
			var obj = {
				'name' : '第'+j+'人',
				'mobile' : '',
				'cardno' : '',
				'goods_code' : $scope.goodarr[0].goods_code,
				'pay_price' : goods[$scope.goodarr[0].goods_code],	//实际支付价格
				'subsidy' : 0,		//补贴余额
				'usesubsidy' : 0,	//本次使用补贴
				'disabled' : false
			};
			count+=1;
			$scope.objs.push(obj);
		}
		calctotalprice();
	}

	//正价票 默认第一人电话
	/*$scope.changemobile = function(index){
		if(index == 0){
			for(var i=1; i<$scope.objs.length; i++){
				$scope.objs[i].mobile = $scope.objs[index].mobile
			}
		}
	};*/


};
