module.exports = function($scope, $state, $stateParams, cardproduct, cardproductinfo){

	var code = $stateParams.code;

	$scope.obj = {};

	if(code === '')   //新建
    {
		$scope.obj = {
			'market_price' : 0,
			'guide_price' : 0,
			'pay_type' : 0,
			'stock_type' : 0,
			'current_stock_num' : 0,
			'max_limit' : -1,
			'max_limit_type' : 0,
			'realname_type' : 0
		};
    }
    else  
    {
    	cardproductinfo.save({'code' : code}, function(res){

    		console.log(res);

    	})
    }

	

	$scope.gogo = function(){


		cardproduct.save($scope.obj, function(res){

			console.log(res);



		});


	}
    
};