module.exports = function($resource, $state, $http, $q){

	return {

		restrict : 'AE',
		template : require('../views/productinfoflashsale.html'),
		replace:true,
		scope:{
			'saleobj' : '=',
			'util' : '=',
		},
		link : function(scope, elements, attrs){

			scope.flashsale = {
				'what' : 'create',
			};
		    scope.flashsale.start = {};
		    scope.flashsale.start.date = new Date();
		    scope.flashsale.start.h = '00';
		    scope.flashsale.start.m = '00';

		    scope.flashsale.end = {};
		    scope.flashsale.end.date = new Date();
		    scope.flashsale.end.h = '23';
		    scope.flashsale.end.m = '59';

		    scope.flashsale.open = function(obj) {
		        obj.opened = true;
		    };

		    $resource('/api/as/tc/flashsale/info', {}, {})
		    .get({'sale_code' : scope.saleobj.code}, function(res){
		    	if(res.errcode === 0 ){
			        scope.flashsale.what = 'update';
			        scope.flashsale.start.date = scope.util.str2date(res.data.start_time);
					scope.flashsale.end.date = scope.util.str2date(res.data.end_time);
					scope.flashsale.start.h = res.data.start_h;
					scope.flashsale.start.m = res.data.start_m;
					scope.flashsale.end.h = res.data.end_h;
					scope.flashsale.end.m = res.data.end_m;
			    }else if(res.errcode === 10003){
			    	scope.flashsale.what = 'create';
			    }else{
			        alert(res.sysaffirm.data.errmsg);
			        return ;
			    }
		    });


		    scope.save = function(){
				var url = '';
				if(scope.flashsale.what === 'create'){
					url = '/api/as/tc/flashsale/create';
				}else if(scope.flashsale.what === 'update'){
					url = '/api/as/tc/flashsale/update';
				}
				var para = {
					'start_time' : scope.util.date2str(scope.flashsale.start.date) + 
								   ' ' + scope.flashsale.start.h +
								   ':' + scope.flashsale.start.m +
								   ':00',
					'end_time' :   scope.util.date2str(scope.flashsale.end.date) + 
								   ' ' + scope.flashsale.end.h +
								   ':' + scope.flashsale.end.m +
								   ':00',
					'sale_code' : scope.saleobj.code
				};

				$resource(url, {}, {}).save(para, function(res){
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

