module.exports = function($resource, $state, $http, $q){

	return {

		restrict : 'AE',
		template : require('../views/p_shareprofit.html'),
		replace:true,
		scope:{
			'saleobj' : '=',
			'util' : '=',
		},
		link : function(scope, elements, attrs){
			scope.salefrobj = {};


			console.log('积分code');
			console.log(scope.saleobj.code);
			$resource('/api/as/tc/saleshangkeprice/getinfo', {}, {})
			.save({'sale_code' : scope.saleobj.code}, function(res){

				console.log('分润信息');
				
				scope.salefrobj = res.data;
                console.log(res);


			});

            scope.saleFrSetSave = function(){
				alert('添加分润');
                scope.salefrobj.sale_code = scope.saleobj.code;
                if(parseInt(scope.salefrobj.profit_ratio) >= 0 && parseInt(scope.salefrobj.profit_ratio) <= 100 && parseInt(scope.salefrobj.rebate_unlimited) >= 0){
                    $resource('/api/as/tc/saleshangkeprice/save', {}, {})
                    .save(scope.salefrobj,function(res){
                        console.log(scope.salefrobj);
                        if(res.errcode !== 0)
                        {
                            alert(res.errmsg);
                            return;
                        }
                        console.log('添加成功');

                        })
                } else {
					alert('设置正确的利润率(0-100),红包上限不能为负数');
				}
				
                
				// .save({'integral_sale_code':scope.obj.integral_sale_code,'integral_price':scope.obj.integral_price,'list' : array}, function(res){
				// 	console.log('bbbbbbb');
				// 	console.log(res);
				// 	if(res.errcode !== 0)
				// 	{
				// 		alert(res.errmsg);
				// 		return;
				// 	}
				// 	console.log('添加成功');

					
				// });

			};

    //         $scope.saleFrSetSave = function(){
	// 	if(parseInt(scope.salefrobj.profit_ratio) >= 0 && parseInt(scope.salefrobj.profit_ratio) <= 100 && parseInt(scope.salefrobj.rebate_unlimited) >= 0){
	// 		scope.salefrobj.sale_code = scope.saleobj.code;
	// 		saveSaleFenRun.save(scope.salefrobj, function(res){
	// 	     	if(res.errcode === 0)
	// 	     	{
	// 	     		alert('保存成功');
	// 				$uibModalInstance.close();
	// 	     	}
	//      		else
	// 			{
	// 				alert(res.errmsg);
	// 			}
	
	// 	    });
	// 	} else {
	// 		alert('设置正确的利润率(0-100),红包上限不能为负数');
	// 	}
	// }

		 	

			
		   
		}

	};
};

