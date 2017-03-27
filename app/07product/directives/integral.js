module.exports = function($resource, $state, $http, $q,toaster){

	return {

		restrict : 'AE',
		template : require('../views/p_integral.html'),
		replace:true,
		scope:{
			'saleobj' : '=',
			'util' : '=',
		},
		link : function(scope, elements, attrs){
			scope.obj = {
				'integral_price' : 0
			}

			console.log('积分code');
			console.log(scope.saleobj.code);
			$resource('/api/us/tc/saleintegral/findsaleintegrallist', {}, {})
			.save({'integral_sale_code' : scope.saleobj.code}, function(res){

				console.log('积分信息');
				console.log(res);
				scope.obj = res.data[0];


			});

		 	

			scope.salejfsave = function(){
				scope.obj.integral_sale_code = scope.saleobj.code;
				scope.obj.integral_type = '0';
				var array = [];
				array.push(scope.obj);
				$resource('/api/uc/tc/ticketSaleIntegralService/saveSaleInteral', {}, {})
				.save({'integral_sale_code':scope.obj.integral_sale_code,'integral_price':scope.obj.integral_price,'list' : array}, function(res){
					console.log('bbbbbbb');
					console.log(res);
					if(res.errcode !== 0)
					{
						alert(res.errmsg);
						return;
					}
					toaster.success({title:"",body:"操作成功!"});					
				});

			};
		   
		}

	};
};

