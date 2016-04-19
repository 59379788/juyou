module.exports = function($scope, $state, viewlist, salecreate, dictbytypelist){

	$scope.saleobj = {};

	//初始化值
	$scope.saleobj.sms_type = '0';
	$scope.saleobj.sys_affirm_type = '0';
	$scope.saleobj.pay_type = '0';
	$scope.saleobj.stock_type = '0';
	$scope.saleobj.sale_target_type = '0';
	$scope.saleobj.state = '0';
	

	//基本信息 景区下拉
	viewlist().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        	$scope.saleobj.place_code=$scope.viewarr[0].code;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    dictbytypelist({'type' : 'sale_category'}).then(function(res) {
    	console.log(res);
        if(res.errcode === 0)
        {
        	$scope.typearr = res.data;
        	$scope.saleobj.sale_category=$scope.typearr[0].value;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    

    //基本信息 保存
	$scope.salego = function(){

		if($scope.saleobj.name === undefined || $scope.saleobj.name == '')
		{
			alert('销售品名称不能为空');
			return;
		}
		$scope.saleobj.market_price *= 100;
		$scope.saleobj.guide_price *= 100;
		salecreate.save($scope.saleobj, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$state.go('app.editsale', {'id' : res.data.uuid});	
			}
			else
			{
				alert(res.errmsg);
			}
		});
	};
	
};