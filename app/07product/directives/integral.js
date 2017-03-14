module.exports = function($resource, $state, $http, $q){

	return {

		restrict : 'AE',
		template : require('../views/p_integral.html'),
		replace:true,
		scope:{
			'saleobj' : '=',
			'util' : '=',
		},
		link : function(scope, elements, attrs){

			console.log('积分code');
			console.log(scope.saleobj.code);
			$resource('/api/us/tc/saleintegral/findsaleintegrallist', {}, {})
			.save({'integral_sale_code' : scope.saleobj.code}, function(res){

				console.log('积分信息');
				console.log(res);

			});
		   
		}

	};
};

