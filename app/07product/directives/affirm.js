module.exports = function($resource, $state, $http, $q){

	return {

		restrict : 'AE',
		template : require('../views/p_affirm.html'),
		replace:true,
		scope:{
			'saleobj' : '=',
			'util' : '=',
		},
		link : function(scope, elements, attrs){

			scope.page = {};
			scope.affirm = {
				'what' : 'create',		//create/update,
				'sysaffirm_sale_code' : scope.saleobj.code,
				'sysaffirm_target_code' : '',	//确认项
				'sysaffirm_target_goods_code' : '',	//商品id
				'sysaffirm_target_goods_back_type' : '0',	//退票类别
				'sysaffirm_target_goods_child_flag' : '0',	//成人/儿童
			};

			var beforedata = {
			    //确认列表
			    'affirmlist' :
			    $http({
			        'method' : 'GET', 
			        'url': '/api/as/sc/dict/dictbytypelist',
			        'params' : {'type' : 'ticket_sys_affirm'},

			    }),
			    //系统确认项的信息
			    'sysaffirm' :
			    $http({
			        'method' : 'GET', 
			        'url': '/api/as/tc/salesysaffirm/info',
			        'params' : {'sysaffirm_sale_code' : scope.saleobj.code},
			    }),
			};

			$q.all(beforedata).then(function(res){
				console.log(res);
			    if(res.affirmlist.data.errcode === 0){
			        //console.log(res.affirmlist.data);
			    }else{
			        alert('/api/as/sc/dict/dictbytypelist' + res.affirmlist.data.errmsg);
			        return ;
			    }

			    if(res.sysaffirm.data.errcode === 0 ){
			        //console.log(res.sysaffirm.data);
			        scope.affirm.what = 'update';
			        angular.extend(scope.affirm, res.sysaffirm.data.data);
			    }else if(res.sysaffirm.data.errcode === 10003){
			    	//console.log(res.sysaffirm.data);
			    	scope.affirm.what = 'create';
			    }else{
			        alert('/api/as/tc/salesysaffirm/info' + res.sysaffirm.data.errmsg);
			        return ;
			    }

			    scope.page = {
			    	'affirmlist' : res.affirmlist.data.data,
			    }
			});


			scope.save = function(){
				if(scope.affirm.sysaffirm_target_code == '')
				{
					alert('请选择对象');
					return;
				}
				var url = '';
				if(scope.affirm.what === 'create'){
					url = '/api/as/tc/salesysaffirm/create';
				}else if(scope.affirm.what === 'update'){
					url = '/api/as/tc/salesysaffirm/update';
				}
				//console.log(scope.affirm);
				$resource(url, {}, {}).save(scope.affirm, function(res){
					console.log(res);
					if(res.errcode != 0){
						alert(res.errmsg);
						return;
					}
					alert('保存成功');
				});
			};

			
		}

		




	};

	
		   
};

