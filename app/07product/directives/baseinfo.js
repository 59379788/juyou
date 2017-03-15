module.exports = function($resource, $state, $http, $q, FileUploader){

	return {

		restrict : 'AE',
		template : require('../views/p_baseinfo.html'),
		replace:true,
		scope:{
			'saleobj' : '=',
			'funobj' : '=',
			'baseinfo' : '=',
			'util' : '=',
		},
		link : function(scope, elements, attrs){

	var obj = {
		'name' : '',
		'code' : '',
		'market_price' : 0,
		'guide_price' : 0,
		'cost_price' : 0,
		'sale_category' : 'F10',
		'sms_template_id' : '',
		'sms_diy' : '',
		'sms_type' : '1',
		'top_pic' : '',
		'logo' : '',
		'periodstart' : '',
		'periodend' : '',
		'sale_belong' : 'juyou',	//产品所属
		'sys_affirm_type' : 1,	//系统确认
		'pay_type' : 0, 	//支付类型
		'stock_type' : 0,	//库存类型
		'sale_target_type' : 0,	//销售目标
		'take_effect_type' : 0,	//生效时间
		'max_limit' : 0,	//最大购买数量
		'order_num_limit' : 0,	//每单最大购买数量限制
		'tour_date_type' : '0',	//是否启用出游时间
		'back_type' : 0,	//是否允许退票
		'ticket_type' : 0,	//是否出票
		'user_status' : 0,	//是否实名制
		'sms_ticketcode_type' : 0,	//短信票码类型
		'bookingnotes' : '',	//团产品预订须知
		'detail' : '',	//销售品简介
	};

	angular.extend(scope.saleobj, obj);

	console.log(scope.saleobj);

	//页面需要的信息。
	scope.page = {};

	var beforedata = {
	    //类型列表
	    'categorylist' :
	    $http({
	        'method' : 'GET', 
	        'url': '/api/as/sc/dict/dictbytypelist',
	        'params' : {'type' : 'sale_category'},
	    }),
	    //产品所属
	    'salebelonglist' :
	    $http({
	        'method' : 'GET', 
	        'url': '/api/as/sc/dict/dictbytypelist',
	        'params' : {'type' : 'ticket_sale_belong'},
	    }),
	    //短信信息
	    'smslist' :
	    $http({
	        'method' : 'GET', 
	        'url': '/api/as/tc/salesmstemplate/list',
	    }),
	};


	if(scope.saleobj.id != ''){
	    beforedata['saleinfo'] = $http({
	        'method' : 'GET', 
	        'url': '/api/as/tc/sale/info',
	        'params' : {
	            'id' : scope.saleobj.id
	        }
	    });
	}


	$q.all(beforedata).then(function(res){

		console.log(res);
		//分类信息
	    if(res.categorylist.data.errcode === 0){
	        //console.log(res.categorylist.data);
	    }else{
	        alert('/api/as/sc/dict/dictbytypelist?type=sale_category' + res.categorylist.data.errmsg);
	        return ;
	    }
	    //销售品所属列表
	    if(res.salebelonglist.data.errcode === 0){
	        //console.log(res.salebelonglist.data);
	    }else{
	        alert('/api/as/sc/dict/dictbytypelist?type=ticket_sale_belong' + res.salebelonglist.data.errmsg);
	        return ;
	    }
	    //短信列表
	    if(res.smslist.data.errcode === 0){
	        //console.log(res.smslist.data);
	    }else{
	        alert('/api/as/tc/salesmstemplate/list' + res.smslist.data.errmsg);
	        return ;
	    }

	    if(angular.isDefined(res.saleinfo)){
	    	//销售品信息
            if(res.saleinfo.data.errcode === 0){
                //console.log(res.saleinfo.data);
                //赋值给销售品对象。
                angular.extend(scope.saleobj, res.saleinfo.data.data);
                scope.baseinfo.dateshow.periodstart.date = scope.util.str2date(scope.saleobj.periodstart);
                scope.baseinfo.dateshow.periodend.date = scope.util.str2date(scope.saleobj.periodend);

            }else{
                alert('/api/as/tc/sale/info' + res.saleinfo.data.errmsg);
                return ;
            }
        }

	    scope.page = {
	    	//分类列表
	    	'categorylist' : res.categorylist.data.data,
	    	//产品所属
	    	'salebelonglist' : res.salebelonglist.data.data,
	    	//短信列表
	    	'smslist' : res.smslist.data.data,
	    	//生效时间
	    	'take_effect_typearr' : [
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
			],
	    };

	    //发短信时，默认短息模板里第一个短信模板。
        if(scope.saleobj.sms_type == 1){
        	scope.saleobj.sms_template_id = res.smslist.data.data[0].sms_template_id;
        	scope.saleobj.sms_diy = res.smslist.data.data[0].sms_diy;
        }


        //获取功能列表
        $resource('/api/as/tc/salecategory/list', {}, {})
        .get({'sale_category_code' : scope.saleobj.sale_category}, function(res){
        	//console.log('功能列表');
        	//console.log(res);
        	if(res.errcode !== 0){
        		alert(res.errmsg);
        		return;
        	}

        	for(var i = 0; i < res.data.length; i++){
        		var tmp = res.data[i];
        		scope.funobj[tmp.sub_table_code] = tmp;
        	}

        });

	});


	scope.save = function(){

		if(scope.saleobj.name === undefined || scope.saleobj.name == '')
		{
			alert('销售品名称不能为空');
			return;
		}
		if(scope.saleobj.sms_type == 1
		&& (scope.saleobj.sms_diy == undefined || scope.saleobj.sms_diy == ''))
		{
			alert('请配置短信内容');
			return;
		}

		scope.saleobj.periodstart = scope.util.date2str(scope.baseinfo.dateshow.periodstart.date);
		scope.saleobj.periodend = scope.util.date2str(scope.baseinfo.dateshow.periodend.date);

		//console.log(scope.saleobj);

		var url = '';
		if(scope.saleobj.id == ''){
			url = '/api/as/tc/sale/create';
		}else{
			url = '/api/as/tc/sale/update';
		}

		$resource(url, {}, {}).save(scope.saleobj, function(res){
			//console.log(res);
			if(res.errcode != 0){
				alert(res.errmsg);
				return;
			}

			if(angular.isDefined(res.data.uuid)){
				scope.saleobj.id = res.data.uuid;
			}
			
			$state.go('app.editproduct', {'id' : scope.saleobj.id});

		});

	};

	//
	scope.changeSms = function(obj){
    	var smsid = obj.sms_template_id;
    	if(smsid == null) 
    	{
    		obj.sms_diy = '';
    	}
    	else
    	{
    		for(var i = 0, j = scope.page.smslist.length; i < j; i++)
    		{
    			var tmp = scope.page.smslist[i];
    			if(tmp.sms_template_id == smsid)
    			{
    				obj.sms_diy = tmp.sms_diy;
    				break;
    			}
    		}
    	}
    };

		   
		}

	};
};

