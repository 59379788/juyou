module.exports = function($scope, $stateParams, goodlist, getattrbycode, usersubsibyquery){

	$scope.signobj = {};
	$scope.signobj.code = $stateParams.code;	

	var cost_price;			//成本价
	var govsubsidy_price;	//限用补贴额
	var btye;


	//初始化查询商品下拉列表
	$scope.load = function(){
	    goodlist.get({'code' : $stateParams.code}, function(res){
			console.log(res);
			if(res.errcode === 0)
			{
				$scope.goodarr = res.data;
	        	$scope.signobj.sale_code = $scope.goodarr[0].goods_code;
	        	cost_price = res.data[0].cost_price * 0.01;
	        	govsubsidy_price = res.data[0].govsubsidy_price * 0.01;
	        	$scope.cost_price = cost_price;
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}
	$scope.load();

	$scope.change = function(goods_code){
		getattrbycode.get({'code' : goods_code}, function(res){
			console.log(res);
			if(res.errcode === 0)
			{
				if(res.data.attr == '98'){
					if($scope.signobj.mobile === undefined || $scope.signobj.mobile == '')
					{
						alert('请输入手机号');
						$scope.signobj.sale_code = $scope.goodarr[0].goods_code;
						return;
					}
					//查询补贴余额
					usersubsibyquery.get({'mobile' : $scope.signobj.mobile}, function(res){
						btye = res.data.generalsubsidy * 0.01;
						if(res.errcode === 0)
						{
							if(btye < govsubsidy_price) {
								alert('补贴余额不足，无法选择补贴团票');
								$scope.signobj.sale_code = $scope.goodarr[0].goods_code;
							}
							if(btye > govsubsidy_price) {
								cost_price -= govsubsidy_price;
								$scope.cost_price = cost_price;
								cost_price += govsubsidy_price;
							} else {
								cost_price -= btye;
								$scope.cost_price = cost_price;
								cost_price += btye;
							}
						}
						else
						{
							alert(res.errmsg);
							$scope.signobj.sale_code = $scope.goodarr[0].goods_code;
						}
					});
				}else{
					$scope.cost_price = cost_price;
				}
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	$scope.blur = function(){
		getattrbycode.get({'code' : $scope.signobj.sale_code}, function(res){
			console.log(res);
			if(res.errcode === 0)
			{
				if(res.data.attr == '98'){
					$scope.load();
				}
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

};
