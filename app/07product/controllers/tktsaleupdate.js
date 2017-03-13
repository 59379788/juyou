module.exports = function($scope, $stateParams, id, viewlist, saleinfo, saleupdate, goodlist, 
	saledetailcreate, saledetaillist, saledetaildelete, dictbytypelist, FileUploader,
	salegovsubsidycreate, salegovsubsidyupdate, salegovsubsidyinfo, salecategorylist, 
	salejuyousubsidycreate, salejuyousubsidyupdate, salejuyousubsidyinfo, what,saveSaleInteral,findsaleintegrallist,findSaleFenRun,saveSaleFenRun,
	//系统确认模块
    affirmcreate, affirminfo, affirmupdate,
    smstmplist,
    //限时购模块
    flashsalecreate, flashsaleinfo, flashsaleupdate,
    getDate, str2date, date2str,
    $resource, attrlistsel
    ){

	//销售品对象
	$scope.saleobj = {};	
	//商品列表对象
	$scope.goodsobj = {};
	//票种列表对象
	$scope.tickettypeobj = {};
	//销售品积分对象
	$scope.salejfobj = {};
	$scope.salejfobj.list = new Array();

	//销售品分润
	$scope.salefrobj = {};


	$scope.section = {};
    $scope.section.start = {};
    $scope.section.end = {};
    $scope.section.unavailableDates = {};
	$scope.start_time = new Date();
	$scope.end_time = new Date();
	$scope.unavailableDates = new Date();
	$scope.mid = new Date();
	$scope.arrdate = [];
	$scope.arrzhou = [];
	$scope.use_rule = [
		false,
		false,
		false,
		false,
		false,
		false,
		false
	];

	$scope.take_effect_typearr = [
		{'name' : '次日','value' : -1},
		{'name' : '即时','value' : 0},
		{'name' : '1小时之后','value' : 1},
		{'name' : '2小时之后','value' : 2},
		{'name' : '3小时之后','value' : 3},
		{'name' : '4小时之后','value' : 4},
		{'name' : '5小时之后','value' : 5},
		{'name' : '6小时之后','value' : 6},
		{'name' : '7小时之后','value' : 7},
		{'name' : '8小时之后','value' : 8},
		{'name' : '9小时之后','value' : 9},
		{'name' : '10小时之后','value' : 10},
		{'name' : '11小时之后','value' : 11},
		{'name' : '12小时之后','value' : 12}
	];

	$scope.what = what;

	//功能模块对象
	$scope.funobj = {};

	//系统确认项模块对象
	$scope.affirm = {};

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

    var uploader2 = $scope.uploader2 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });
    uploader2.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    }); 
    uploader2.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.saleobj.logo = response.savename;
    };

    dictbytypelist({'type' : 'sale_category'}).then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.typearr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });
    //自营
    dictbytypelist({'type' : 'ticket_sale_belong'}).then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.sale_belongarr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    smstmplist.get({}, function(res){
    	if(res.errcode === 0)
        {
        	$scope.smsarr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    })

    $scope.changesms = function(obj){
    	var smsid = obj.sms_template_id;
    	if(smsid == null) 
    	{
    		obj.sms_diy = '';
    	}
    	else
    	{
    		for(var i = 0, j = $scope.smsarr.length; i < j; i++)
    		{
    			var tmp = $scope.smsarr[i];
    			if(tmp.sms_template_id == smsid)
    			{
    				obj.sms_diy = tmp.sms_diy;
    				break;
    			}
    		}
    	}

    };

	saleinfo.get({'id' : id}, function(res){

		if(res.errcode === 0)
		{
			$scope.saleobj = res.data;
			if ($scope.saleobj.periodstart != null) {
				$scope.start_time = str2date($scope.saleobj.periodstart + " 00:00:00");
			}else{
				$scope.start_time = new Date();
			}
			if ($scope.saleobj.unavailableDates != null) {
				if ($scope.saleobj.unavailableDates.length >= 21) {
					$scope.arrdate = $scope.saleobj.unavailableDates.split(',');
				}else{
					$scope.arrdate[0] = $scope.saleobj.unavailableDates;
				}
			}
			if ($scope.saleobj.periodend != null) {
				$scope.end_time = str2date($scope.saleobj.periodend + " 23:59:59");
			}else{
				$scope.end_time = new Date($scope.start_time.getFullYear(),11,31);
			}
			if ($scope.saleobj.use_rule != null) {
				if ($scope.saleobj.use_rule.length >= 3) {
					$scope.arrzhou = $scope.saleobj.use_rule.split(',');
				}else{
					$scope.arrzhou[0] = $scope.saleobj.use_rule;
				}
			}
			for (var i = 0 ; i <= $scope.arrzhou.length - 1; i++) {
				$scope.use_rule[ $scope.arrzhou[i] - 1 ] = true ;
			}
			
			$scope.saleobj.market_price *= 0.01;
			$scope.saleobj.guide_price *= 0.01;
			$scope.saleobj.cost_price *= 0.01;
			
			//初始化商品列表
			//getsaledetail($scope.saleobj.code);
			//初始化票种列表
			gettickettypedetail($scope.saleobj.code);

			//$scope.goodsobj.place_code = $scope.saleobj.place_code;
			//getgoodslist($scope.goodsobj.place_code);
			$scope.tickettypeobj.place_code = $scope.saleobj.place_code;
			gettickettypelist($scope.tickettypeobj.place_code);

			//获取功能模块
			getfun($scope.saleobj.sale_category, $scope.saleobj.code);

			//系统确认模块
			getaffirm($scope.saleobj.code);
			
			
			//加载积分配置
			findsaleintegrallist.save({'integral_sale_code':$scope.saleobj.code},function(res){
				$scope.salejfobj.list = res.data;
			});
			
			//加载销售品分润设置
			findSaleFenRun.save({'sale_code':$scope.saleobj.code},function(res){
				$scope.salefrobj = res.data;
			});

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
	
	
	
	
	$scope.saleFrSetSave = function(){
		if(parseInt($scope.salefrobj.profit_ratio) >= 0 && parseInt($scope.salefrobj.profit_ratio) <= 100 && parseInt($scope.salefrobj.rebate_unlimited) >= 0){
			$scope.salefrobj.sale_code = $scope.saleobj.code;
			saveSaleFenRun.save($scope.salefrobj, function(res){
		     	if(res.errcode === 0)
		     	{
		     		alert('保存成功');
		     	}
	     		else
				{
					alert(res.errmsg);
				}
	
		    });
		} else if($scope.salefrobj.rebate_unlimited < 0){
			alert('请设置正确的红包上限');
			//return;
		} else {
			alert('设置正确的利润率(0-100)');
		}
	}

	$scope.salejfsave = function(){
		if($scope.salejfobj.list.length > 0){
			$scope.salejfobj.integral_sale_code = $scope.saleobj.code;
			saveSaleInteral.save($scope.salejfobj, function(res){
		     	if(res.errcode === 0)
		     	{
		     		alert('保存成功');
		     	}
	     		else
				{
					alert(res.errmsg);
				}
	
		    });
		} else {
			alert('请添加商品');
			return;
		}
	}

	//添加销售品积分及金额
	$scope.addjf = function(){
		alert('设置积分');
		if(!checkAddJf($scope.salejfobj.addtype))
		{
			return;
		}
		
		$scope.salejfobj.list.push({'integral_type':$scope.salejfobj.addtype,'integral_price':0})
			console.log('ooooooooooooooo');
		console.log($scope.salejfobj);
			console.log('ooooooooooooooo');
		$scope.salejfobj.code = $scope.saleobj.code;
		saledetailcreate.save($scope.salejfobj, function(res){

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
	

	function checkAddJf(obj){
		console.log('obj'+obj);
		if( obj === undefined || obj == ''){
			return false;
		}

		for(var i = 0; i < $scope.salejfobj.list.length; i++)
		{
			
			if($scope.salejfobj.list[i].integral_type == obj)
			{
				alert('不能添加重复商品！');
				return false;
			}
		}

		return true;
	}


	//详细信息	删除
	$scope.deljf = function(id){
		if (confirm("确定要删除商品吗，亲！！～～")) {
            $scope.salejfobj.list.splice(id,1);
       }
	}


	function getsaledetail(code){
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
		if (!confirm("确定要删除商品吗，亲！！～～")) {
            return false;
        }

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
		if($scope.saleobj.sms_type == 1
		&& ($scope.saleobj.sms_diy == undefined || $scope.saleobj.sms_diy == ''))
		{
			alert('请配置短信内容');
			return;
		}
		$scope.saleobj.market_price *= 100;
		$scope.saleobj.guide_price *= 100;
		$scope.saleobj.cost_price *= 100;
		$scope.saleobj.periodstart = getDate($scope.start_time);
		$scope.saleobj.periodend = getDate($scope.end_time);
		for (var k =  0; k <= $scope.arrdate.length - 1; k++) {
			if(k == 0){
				$scope.saleobj.unavailableDates = '';
				$scope.saleobj.unavailableDates = $scope.arrdate[0];
			}else{
				$scope.saleobj.unavailableDates = $scope.saleobj.unavailableDates + ',' ; 
				$scope.saleobj.unavailableDates = $scope.saleobj.unavailableDates +  $scope.arrdate[k]; 
			}
		}
		var h = 0;
		for(var i = 0; i <= 6; i++) {
			if ( ($scope.use_rule[i] === true)  && (h !== 0)) {
				$scope.saleobj.use_rule = $scope.saleobj.use_rule+','+(i+1).toString();
			}
			if ($scope.use_rule[i] == true  && h == 0) {
				$scope.saleobj.use_rule = (i+1).toString();
				h++;
			}
		}
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
					else if(tmp.sub_table_code === 'flashsale')
					{
						getflashsale(salecode, $scope.funobj[tmp.sub_table_code]);
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
		salegovsubsidycreate.save(para, function(res){
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
		salegovsubsidyupdate.save(para, function(res){
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
		salejuyousubsidyinfo.get({'juyousubsidy_sale_code' : code}, function(res){
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
		salejuyousubsidycreate.save(para, function(res){
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
		salejuyousubsidyupdate.save(para, function(res){
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



	//系统确认项 affirm
	dictbytypelist({'type' : 'ticket_sys_affirm'}).then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.ticket_sys_affirmarr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    function getaffirm(code){
		affirminfo.get({'sysaffirm_sale_code' : code}, function(res){
			if(res.errcode === 10003)
			{
				$scope.affirm['has'] = false;
				$scope.affirm.sysaffirm_target_goods_child_flag = 0;
			}
			else
			{
				$scope.affirm = res.data;
				if(!$scope.affirm.sysaffirm_target_goods_child_flag){
					$scope.affirm.sysaffirm_target_goods_child_flag = 0;
				}
				console.log('ggggggggggggg');
				console.log($scope.affirm);
				console.log('ggggggggggggg');
				$scope.affirm['has'] = true;
			}

		});
	}
	
	$scope.affirmcreate = function(){
		if($scope.affirm.sysaffirm_target_code == undefined)
		{
			alert('请选择对象');
			return;
		}
		var para = {
			'sysaffirm_sale_code' : $scope.saleobj.code,
			'sysaffirm_target_code' : $scope.affirm.sysaffirm_target_code,
			'sysaffirm_target_goods_code' : $scope.affirm.sysaffirm_target_goods_code,
			'sysaffirm_target_goods_back_type' : $scope.affirm.sysaffirm_target_goods_back_type,
			'sysaffirm_target_goods_child_flag' : $scope.affirm.sysaffirm_target_goods_child_flag
		};
		affirmcreate.save(para, function(res){
			if(res.errcode === 0)
			{
				alert('ok');
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	$scope.affirmupdate = function(){
		if($scope.affirm.sysaffirm_target_code == undefined)
		{
			alert('请选择对象');
			return;
		}
		var para = {
			'sysaffirm_sale_code' : $scope.saleobj.code,
			'sysaffirm_target_code' : $scope.affirm.sysaffirm_target_code,
			'sysaffirm_target_goods_code' : $scope.affirm.sysaffirm_target_goods_code,
			'sysaffirm_target_goods_back_type' : $scope.affirm.sysaffirm_target_goods_back_type,
			'sysaffirm_target_goods_child_flag' : $scope.affirm.sysaffirm_target_goods_child_flag
		};
		affirmupdate.save(para, function(res){
			if(res.errcode === 0)
			{
				alert('ok');
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}



	//限时购
	//有效区间
    $scope.flashsale = {};
    $scope.flashsale.start = {};
    $scope.flashsale.start.date = new Date();
    $scope.flashsale.start.h = '00';
    $scope.flashsale.start.m = '00';

    $scope.flashsale.end = {};
    $scope.flashsale.end.date = new Date();
    $scope.flashsale.end.h = '23';
    $scope.flashsale.end.m = '59';

    $scope.open = function(obj) {
        obj.opened = true;
    };

    function getflashsale(code, obj){
		flashsaleinfo.get({'sale_code' : code}, function(res){


			if(res.errcode === 10003)
			{
				obj['has'] = false;
			}
			else
			{
				//$scope.flashsale = res.data;
				$scope.flashsale.start.date = str2date(res.data.start_time);
				$scope.flashsale.end.date = str2date(res.data.end_time);
				$scope.flashsale.start.h = res.data.start_h;
				$scope.flashsale.start.m = res.data.start_m;
				$scope.flashsale.end.h = res.data.end_h;
				$scope.flashsale.end.m = res.data.end_m;

				// $scope.obj.start_date = date2str($scope.section.start.date);
				// $scope.obj.end_date = date2str($scope.section.end.date);
				// $scope.obj.use_rule = getWeek();
			}

		});

	}

	$scope.flashsalecreate = function(){
		var para = {
			'start_time' : getDate($scope.flashsale.start.date) + 
						   ' ' + $scope.flashsale.start.h +
						   ':' + $scope.flashsale.start.m +
						   ':00',
			'end_time' :   getDate($scope.flashsale.end.date) + 
						   ' ' + $scope.flashsale.end.h +
						   ':' + $scope.flashsale.end.m +
						   ':00',
			'sale_code' : $scope.saleobj.code
		};
		flashsalecreate.save(para, function(res){
			if(res.errcode === 0)
			{
				alert('ok');
				$scope.funobj.flashsale.has = true;
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	$scope.flashsaleupdate = function(){
		var para = {
			'start_time' : getDate($scope.flashsale.start.date) + 
						   ' ' + $scope.flashsale.start.h +
						   ':' + $scope.flashsale.start.m +
						   ':00',
			'end_time' :   getDate($scope.flashsale.end.date) + 
						   ' ' + $scope.flashsale.end.h +
						   ':' + $scope.flashsale.end.m +
						   ':00',
			'sale_code' : $scope.saleobj.code
		};
		flashsaleupdate.save(para, function(res){
			if(res.errcode === 0)
			{
				alert('ok');
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	$scope.adddate = function(){
		for (var i = 0; i <= $scope.arrdate.length - 1; i++) {
			if ($scope.arrdate[i] == getDate($scope.mid)) {
				alert('此日期已选');
				return ;
			}
		}
		if (getDate($scope.mid) < getDate(new Date())) {
			alert('请选择今日之后的日期');
			return ;
		}
		$scope.arrdate.push(getDate($scope.mid));
		for (var i = 0; i <= $scope.arrdate.length -1; i++) {
			for (var j = i + 1; j <= $scope.arrdate.length -1; j++) {
				if ($scope.arrdate[i] > $scope.arrdate[j]) {
					var temp;
					temp = $scope.arrdate[i];
					$scope.arrdate[i] = $scope.arrdate[j];
					$scope.arrdate[j] = temp;
				}
			}
		}
	}


	$scope.deldate = function(id){
		$scope.arrdate.splice(id,1);
	}


	//---------- 20170306 ---- 销售品添加票种 ------------------//

	$scope.section.periodstart = {};
    $scope.section.periodend = {};
    $scope.section.periodstart.date = new Date();
    $scope.section.periodend.date = new Date();
	// $scope.tickettypeobj.periodstart = new Date();
	// $scope.tickettypeobj.periodend = new Date();

	//获取票种详情
	function gettickettypedetail(code){

		$resource('/api/as/tc/salettype/list', {}, {})
		.save({'sale_code' : code}, function(res){
			console.log('获取票种详情');
			console.log(res);
        	if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}

			for(var i = 0; i < res.data.length; i++){
				var tmp = res.data[i];
				tmp.section = {
					'periodstart' : {
						'date' : str2date(tmp.periodstart)
					},
					'periodend' : {
						'date' : str2date(tmp.periodend)
					}
				}
			}
			$scope.objs1 = res.data;
			console.log($scope.objs1);
        });
	}
	

	function checkAdd1(obj){

		if(obj.ticket_type_code == null)
		{
			alert('请选择票种');
			return false;
		}

		if(!angular.isArray($scope.objs1)) return false;

		for(var i = 0; i < $scope.objs1.length; i++)
		{
			var tmp = $scope.objs1[i];
			if(tmp.ticket_type_code === obj.ticket_type_code)
			{
				alert('不能添加重复票种！');
				return false;
			}
		}

		return true;
	}

	//添加票种
	$scope.add1 = function(){
		if(!checkAdd1($scope.tickettypeobj))
		{
			return;
		}
		$scope.tickettypeobj.sale_code = $scope.saleobj.code;

		$scope.tickettypeobj.periodstart = date2str($scope.start_time);
		$scope.tickettypeobj.periodend = date2str($scope.end_time);

		console.log($scope.tickettypeobj);
		$resource('/api/as/tc/salettype/save', {}, {})
		.save($scope.tickettypeobj, function(res){
			console.log('保存票种信息');
			console.log(res);
        	if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			gettickettypedetail($scope.saleobj.code);
        });
	};

	$scope.change1 = function(code){
		gettickettypelist(code);
	}

	function gettickettypelist(place_code)
	{
		//详细信息 通过景区编号获取商品下拉
		$resource('/api/as/tc/goods/typelist', {}, {})
		.save({'view' : place_code}, function(res){
			console.log('查询景区下的票种信息');
			console.log(res);
        	if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			$scope.tickettypearr = res.data;
			if(res.data.length > 0) $scope.tickettypeobj.ticket_type_code = res.data[0].code;
        });
	}

	//详细信息	删除
	$scope.del1 = function(id){
		if (!confirm("确定要删除该票种吗，亲！！～～")) {
            return false;
        }
        $resource('/api/as/tc/salettype/delete', {}, {})
		.save({'id' : id}, function(res){
			console.log('删除景区下的票种信息');
			console.log(res);
        	if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			gettickettypedetail($scope.saleobj.code);
        });
	}

	//详细信息 票种属性下拉
	attrlistsel().then(function(res) {
		console.log(res);
        if(res.errcode === 0)
        {
        	$scope.tktarr = res.data;
        	$scope.tickettypeobj.ticket_type_attr = $scope.tktarr[0].ticket_attr_id;
        	//console.log($scope.goodsobj.ticketattr);
        }
        else
        {
            alert(res.errmsg);
        }
    });

    $scope.save1 = function(id){
    	console.log(id);
    };
	//---------- 20170306 ---- 销售品添加票种 ------------------//
};