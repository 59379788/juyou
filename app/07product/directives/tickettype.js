module.exports = function($resource, $state, $http, $q, toaster){

	return {

		restrict : 'AE',
		template : require('../views/p_tickettype.html'),
		replace:true,
		scope:{
			'saleobj' : '=',
			'util' : '=',
			// 'open' : '=',
		},
		link : function(scope, elements, attrs){

	scope.tickettypeobj = {
		'place_code' : '',
		'ticket_type_code' : '',
		'ticket_type_attr' : '',
	};

	scope.tickettypelist = [];

	//页面需要的数据
	scope.page = {};

	var beforedata = {
	    //景区列表
	    'viewlist' :
	    $http({
	        'method' : 'GET', 
	        'url': '/api/as/tc/placeview/jlist',
	    }),
	    //票种属性
	    'attrlist' :
	    $http({
	        'method' : 'GET', 
	        'url': '/api/as/tc/attr/list',
	    }),
	};


	$q.all(beforedata).then(function(res){
		console.log(res);

		if(res.viewlist.data.errcode === 0){
	        console.log(res.viewlist.data);
	    }else{
	        alert('/api/as/tc/placeview/jlist' + res.viewlist.data.errmsg);
	        return ;
	    }

	    if(res.attrlist.data.errcode === 0){
	        console.log(res.attrlist.data);
	        scope.tickettypeobj.ticket_type_attr = res.attrlist.data.data[0].ticket_attr_id;
	    }else{
	        alert('/api/as/tc/attr/list' + res.attrlist.data.errmsg);
	        return ;
	    }

        gettickettypedetail();

	    scope.page = {
	    	'viewlist' : res.viewlist.data.data,
	    	'attrlist' : res.attrlist.data.data,
	    	'tickettypelist' : [],
	    	//'saletickettypelist' : res.saletickettypelist.data.data,
	    }

	});
		
	//景区下拉
	scope.changeview = function(){
		$resource('/api/as/tc/goods/typelist', {}, {})
		.save({'view' : scope.tickettypeobj.place_code}, function(res){
			//console.log('查询景区下的票种信息');
			//console.log(res);
        	if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			scope.page.tickettypelist = res.data;
			if(res.data.length > 0) 
				scope.tickettypeobj.ticket_type_code = res.data[0].code;
        });
	};

	//添加票种
	scope.add = function(){

		if(!checkAdd()) return;

		scope.tickettypeobj.sale_code = scope.saleobj.code;
		scope.tickettypeobj.periodstart = scope.saleobj.periodstart;
		scope.tickettypeobj.periodend = scope.saleobj.periodend;

		$resource('/api/as/tc/salettype/save', {}, {})
		.save(scope.tickettypeobj, function(res){
			//console.log('保存票种信息');
			//console.log(res);
        	if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			gettickettypedetail();
        });
	};


	scope.save = function(item){

		console.log(item);
		console.log("000000000000");
		console.log(scope.saleobj);

		var para = {
			id : item.id,
			appoint:item.appoint,
			periodend : scope.util.date2str(item.section.periodend.date),
			periodstart : scope.util.date2str(item.section.periodstart.date)
		}

		console.log(para);
		$resource('/api/as/tc/salettype/save', {}, {})
		.save(para, function(res){
			console.log('保存票种信息');
			console.log(res);
        	if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			toaster.success({ title: "提示", body: '修改成功' });
			gettickettypedetail();
        });
	};


	//详细信息	删除
	scope.del1 = function(id){
		if (!confirm("确定要删除该票种吗，亲！！～～")) {
            return false;
        }
        $resource('/api/as/tc/salettype/delete', {}, {})
		.save({'id' : id}, function(res){
        	if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			toaster.success({ title: "提示", body: '删除成功' });
			gettickettypedetail();
        });
	}


	function checkAdd(){

		console.log(scope.tickettypeobj.ticket_type_code);
		if(scope.tickettypeobj.ticket_type_code == ''){
			alert('请选择一个票种');
			return;
		}

		for(var i = 0; i < scope.page.saletickettypelist.length; i++)
		{
			var tmp = scope.page.saletickettypelist[i];
			if(tmp.ticket_type_code === scope.tickettypeobj.ticket_type_code)
			{
				alert('不能添加重复票种！');
				return false;
			}
		}

		return true;
	}



	//获取票种详情
	function gettickettypedetail(){

		$resource('/api/as/tc/salettype/list', {}, {})
		.save({'sale_code' : scope.saleobj.code}, function(res){
			//console.log('获取票种详情');
			//console.log(res);
        	if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}

			for(var i = 0; i < res.data.length; i++){
				var tmp = res.data[i];
				tmp.section = {
					'periodstart' : {
						'date' : scope.util.str2date(tmp.periodstart)
					},
					'periodend' : {
						'date' : scope.util.str2date(tmp.periodend)
					},
					'open' : function(obj){
						obj.opened = true;
					}
				}
			}
			scope.page.saletickettypelist = res.data;
        });
	}



		}

	};
};

