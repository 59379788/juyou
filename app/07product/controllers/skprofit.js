module.exports = function($scope,$resource, $state, $stateParams,$http, $q,toaster,$uibModal){
    var code = $stateParams.code;
    var sale_name = $stateParams.name;
    var guide_price = $stateParams.guide_price;
    var cost_price = $stateParams.cost_price;
    console.log(sale_name);
    console.log(guide_price);
    console.log(cost_price);
	// alert(code);
    $scope.salefrobj = {
        'sale_name' : sale_name,
        'sale_code' : code,
        'rebate_lower' : 0,
        'profit_ratio' : 10.00,
        'profit' : '',
        'rebate_unlimited' : 0,
        'merchant_make_appointment' : '0',
        'hot_search' : '0'
        
    }
    $scope.salefrobj.sale_cost_price = cost_price;    
    $scope.saleobj = {
        'guide_price' : guide_price,
        'cost_price' : cost_price
    }
    $scope.obj = {
        'isSelected' : false // 搜索
    }

    $scope.yyobj = {
        'isSelected' : false // 预约
    }
    $scope.profit = {
        'flag' : ''
    }
    $scope.change = function(){
        console.log('设置利润率');				
        $scope.salefrobj.profit = (($scope.saleobj.guide_price - $scope.saleobj.cost_price) * (1-$scope.salefrobj.profit_ratio *0.01)).toFixed(2);				
        $scope.salefrobj.erjiprofit = (($scope.saleobj.guide_price - $scope.saleobj.cost_price)*$scope.salefrobj.profit_ratio*0.01).toFixed(2);
        console.log($scope.salefrobj.erjiprofit);
        $scope.profit.flag = '0';
    }
    $scope.changeJe = function(){
        console.log('设置二级利润');
        $scope.salefrobj.profit_ratio = (($scope.salefrobj.erjiprofit / ($scope.saleobj.guide_price - $scope.saleobj.cost_price) * 100)).toFixed(2);
        console.log($scope.salefrobj.profit_ratio);
        $scope.salefrobj.profit = (($scope.saleobj.guide_price - $scope.saleobj.cost_price) * (1-$scope.salefrobj.profit_ratio *0.01)).toFixed(2);								
        console.log($scope.salefrobj.profit);
        $scope.profit.flag = '1';	
        			
    }

    $resource('/api/as/mc/mergoods/getGoodsInfoByCode', {}, {})
    .save({'sale_code' : code}, function(res){
        console.log('分润信息');
        console.log(res);
        if(res.errcode === 0){
            
            angular.extend($scope.salefrobj, res.data);
            if($scope.salefrobj.hot_search == 1){
                $scope.obj.isSelected = true;
            } else if($scope.salefrobj.hot_search == 0){
                $scope.obj.isSelected = false;
            }
            if($scope.salefrobj.merchant_make_appointment == 1){
                $scope.yyobj.isSelected = true;
            } else if($scope.salefrobj.merchant_make_appointment == 0){
                $scope.yyobj.isSelected = false;
            }
            
            $scope.salefrobj.profit_ratio =$scope.salefrobj.profit_ratio.toFixed(2);
            $scope.salefrobj.profit = (($scope.saleobj.guide_price - $scope.saleobj.cost_price) * (1-$scope.salefrobj.profit_ratio * 0.01)).toFixed(2);
            console.log($scope.salefrobj.profit);
            $scope.salefrobj.erjiprofit = (($scope.saleobj.guide_price - $scope.saleobj.cost_price)*$scope.salefrobj.profit_ratio*0.01).toFixed(2);
            console.log($scope.salefrobj.erjiprofit);
            $scope.salefrobj.rebate_unlimited = parseFloat($scope.salefrobj.rebate_unlimited);

            if($scope.salefrobj.rebate_unlimited == 0){
                ($scope.salefrobj.rebate_unlimited) = parseFloat($scope.salefrobj.profit);
                
            }	
            
        }else if(res.errcode === 10003){
            $scope.salefrobj.profit = (($scope.saleobj.guide_price - $scope.saleobj.cost_price) * (1-$scope.salefrobj.profit_ratio * 0.01)).toFixed(2);
            $scope.salefrobj.erjiprofit = (($scope.saleobj.guide_price - $scope.saleobj.cost_price)*$scope.salefrobj.profit_ratio*0.01).toFixed(2);
            console.log($scope.salefrobj.erjiprofit);
            if($scope.salefrobj.rebate_unlimited == 0){
                $scope.salefrobj.rebate_unlimited = parseFloat($scope.salefrobj.profit);
            } 
        }else{
            toaster.success({title:"",body:res.errmsg});
        }	
                    
        scope.salefrobj = res.data;

    });


    		$scope.salefrobj.search_type = $scope.obj.isSelected;
			$scope.onChange = function(isSelected){
				console.log(isSelected);
				if(isSelected == true) {
					$scope.salefrobj.hot_search = '1'; 
				} else {
					$scope.salefrobj.hot_search = '0';
				}
			}

			$scope.onYYChange = function(isSelected){
				console.log(isSelected);
				if(isSelected == true) {
					$scope.salefrobj.merchant_make_appointment = '1'; 
				} else {
					$scope.salefrobj.merchant_make_appointment = '0';
				}
			}

            $scope.saleFrSetSave = function(){
                // $scope.salefrobj.sale_code = $scope.saleobj.code;
				// console.log((scope.salefrobj.rebate_lower,scope.salefrobj.profit));
				if($scope.salefrobj.profit_ratio==undefined){
					toaster.success({title:"",body:"利润率不能为负数"});
				} else if($scope.salefrobj.profit_ratio>100){
					toaster.success({title:"",body:"利润率不能大于100"});
				} else if($scope.salefrobj.rebate_unlimited==undefined || $scope.salefrobj.rebate_lower==undefined){
					toaster.success({title:"",body:"红包金额不能为负数"});
				} else if($scope.salefrobj.rebate_lower > $scope.salefrobj.rebate_unlimited){
					toaster.success({title:"",body:"红包下限不能大于红包上限"});
				} else if($scope.salefrobj.rebate_lower>$scope.salefrobj.profit){
					toaster.success({title:"",body:"红包下限不能大于利润"});
				} else if($scope.salefrobj.rebate_unlimited>$scope.salefrobj.profit){
					toaster.success({title:"",body:"红包上限不能大于利润"});			
				} else {
					$resource('/api/ac/mc/merplaceserviceimpl/createSKProprietaryInformation', {}, {})
                    .save($scope.salefrobj,function(res){
                         console.log($scope.salefrobj);
                        if(res.errcode !== 0)
                        {
                            toaster.success({title:"",body:res.errmsg});
                            return;
                        }
						toaster.success({title:"",body:"操作成功"});

                    })
				}
				
				
			};

			// 基本信息
};

