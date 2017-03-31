module.exports = function($resource, $state, $http, $q,toaster){

	return {

		restrict : 'AE',
		template : require('../views/p_shareprofit.html'),
		replace:true,
		scope:{
			'saleobj' : '=',
			'util' : '=',
		},
		link : function(scope, elements, attrs){
			scope.salefrobj = {
				'rebate_lower' : 0,
				'profit_ratio' : 0,
				'profit' : '',
				'rebate_unlimited' : 0
			}
			
			scope.obj = {
				'isSelected' : false
			}

			// scope.hb = {
			// 	'isSelected' : false
			// }


			console.log('打出基本信息');
			console.log(scope.saleobj.guide_price);
			console.log(scope.saleobj.cost_price);
			scope.change = function(){
				scope.salefrobj.profit = ((scope.saleobj.guide_price - scope.saleobj.cost_price) * (1-scope.salefrobj.profit_ratio *0.01)).toFixed(2);
				// if(scope.salefrobj.rebate_unlimited == 0){
				// 	scope.salefrobj.rebate_unlimited = parseInt(scope.salefrobj.profit);
				// }				
			}





			
			$resource('/api/as/tc/saleshangkeprice/getinfo', {}, {})
			.save({'sale_code' : scope.saleobj.code}, function(res){
				console.log('分润信息');

				if(res.errcode === 0){
					angular.extend(scope.salefrobj, res.data);
					//scope.salefrobj.rebate_unlimited == scope.salefrobj.profit;
					// console.log(scope.salefrobj);
					if(scope.salefrobj.search_type == 0){
						scope.obj.isSelected = true;
					} else if(scope.salefrobj.search_type == 1){
						scope.obj.isSelected = false;
					}

					if(scope.salefrobj.rebate_type == 0){
						scope.hb.isSelected = true;
					} else if(scope.salefrobj.rebate_type == 1){
						scope.hb.isSelected = false;
					}

					scope.salefrobj.profit = ((scope.saleobj.guide_price - scope.saleobj.cost_price) * (1-scope.salefrobj.profit_ratio * 0.01)).toFixed(2);
					if(scope.salefrobj.rebate_unlimited == 0){
						(scope.salefrobj.rebate_unlimited) = parseInt(scope.salefrobj.profit);
						
					}	
					
				}else if(res.errcode === 10003){
					scope.salefrobj.profit = ((scope.saleobj.guide_price - scope.saleobj.cost_price) * (1-scope.salefrobj.profit_ratio * 0.01)).toFixed(2);
					if(scope.salefrobj.rebate_unlimited == 0){
						scope.salefrobj.rebate_unlimited = parseInt(scope.salefrobj.profit);
					} 
				}else{
					toaster.success({title:"",body:res.errmsg});
				}	
							
				//scope.salefrobj = res.data;

				
                console.log(res);


			});


			
			scope.salefrobj.search_type = scope.obj.isSelected;
			scope.onChange = function(isSelected){
				console.log(isSelected);
				if(isSelected == true) {
					scope.salefrobj.search_type = '0'; 
				} else {
					scope.salefrobj.search_type = '1';
				}
			}
			// scope.onHbChange = function(isSelected){
			// 	console.log(isSelected);
			// 	if(isSelected == true) {
			// 		scope.salefrobj.rebate_type = '0'; 
			// 	} else {
			// 		scope.salefrobj.rebate_type = '1';
			// 	}
			// }

            scope.saleFrSetSave = function(){
                scope.salefrobj.sale_code = scope.saleobj.code;
				// console.log((scope.salefrobj.rebate_lower,scope.salefrobj.profit));
				if(scope.salefrobj.profit_ratio==undefined){
					toaster.success({title:"",body:"利润率不能为负数"});
				} else if(scope.salefrobj.profit_ratio>100){
					toaster.success({title:"",body:"利润率不能大于100"});
				} else if(scope.salefrobj.rebate_unlimited==undefined || scope.salefrobj.rebate_lower==undefined){
					toaster.success({title:"",body:"红包金额不能为负数"});
				} else if(scope.salefrobj.rebate_lower > scope.salefrobj.rebate_unlimited){
					toaster.success({title:"",body:"红包下限不能大于红包上限"});
				} else if(scope.salefrobj.rebate_lower>scope.salefrobj.profit){
					toaster.success({title:"",body:"红包下限不能大于利润"});
				} else {
					$resource('/api/as/tc/saleshangkeprice/save', {}, {})
                    .save(scope.salefrobj,function(res){
                        // console.log(scope.salefrobj);
                        if(res.errcode !== 0)
                        {
                            toaster.success({title:"",body:res.errmsg});
                            return;
                        }
						toaster.success({title:"",body:"操作成功"});

                    })
				}
				// if(scope.salefrobj.rebate_lower > scope.salefrobj.rebate_unlimited){
				// 	toaster.success({title:"",body:"红包下限不能大于红包上限"});
				// } else 
                // if(parseInt(scope.salefrobj.profit_ratio) >= 0 && parseInt(scope.salefrobj.profit_ratio) <= 100 && parseInt(scope.salefrobj.rebate_unlimited) >= 0 && scope.salefrobj.rebate_lower <= scope.salefrobj.rebate_unlimited &&(scope.salefrobj.rebate_lower<=scope.profit)){
                //     $resource('/api/as/tc/saleshangkeprice/save', {}, {})
                //     .save(scope.salefrobj,function(res){
                //         console.log(scope.salefrobj);
                //         if(res.errcode !== 0)
                //         {
                //             toaster.success({title:"",body:res.errmsg});
                //             return;
                //         }
				// 		toaster.success({title:"",body:"添加成功"});

                //         })
                // } else if(scope.salefrobj.rebate_lower > scope.salefrobj.rebate_unlimited){
				// 	toaster.success({title:"",body:"红包下限金额不能大于红包上限金额"});
				// } else if(scope.salefrobj.rebate_lower>scope.profit){
				// 	toaster.success({title:"",body:"红包下限金额不能大于利润"});
				// } else {
				// 	toaster.success({title:"",body:"设置正确的利润率(0-100),红包上限不能为负数"});
				// }
				
			};

			// 基本信息
		   
		}

	};
};

