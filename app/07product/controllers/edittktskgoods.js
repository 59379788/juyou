module.exports = function($scope, $uibModalInstance, saveprice, sale_company_price_id,  sale_code, company_cost_price, cost_price){

	$scope.obj = {};
	$scope.obj.cost_price = company_cost_price;

	var para = {};
	if(sale_company_price_id == undefined){
		para.sale_code = sale_code;
	}else{
		para.id = sale_company_price_id;
	}

	$scope.gogo = function(){

		if($scope.obj.cost_price == undefined)
		{
			alert("请输入分销成本价");
			return;
		}

		if($scope.obj.cost_price < cost_price)
		{
			alert("分销商成本价不能小于平台成本价");
			return;
		}
		para = angular.extend(para, $scope.obj);
		console.log(para);
		saveprice.save(para, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$uibModalInstance.close();
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}

	$scope.cancel = function(){
		$uibModalInstance.close();
	}
	

};
