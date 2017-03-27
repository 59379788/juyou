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
			scope.salefrobj = {};

			scope.obj = {
				'isSelected' : false
			}

			scope.hb = {
				'isSelected' : false
			}


			console.log('积分code');
			console.log(scope.saleobj.code);
			$resource('/api/as/tc/saleshangkeprice/getinfo', {}, {})
			.save({'sale_code' : scope.saleobj.code}, function(res){

				console.log('分润信息');
				
				scope.salefrobj = res.data;
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
			scope.onHbChange = function(isSelected){
				console.log(isSelected);
				if(isSelected == true) {
					scope.salefrobj.rebate_type = '0'; 
				} else {
					scope.salefrobj.rebate_type = '1';
				}
			}

            scope.saleFrSetSave = function(){
				//alert('添加分润');
                scope.salefrobj.sale_code = scope.saleobj.code;
				if(scope.salefrobj.rebate_lower > scope.salefrobj.rebate_unlimited){
					toaster.success({title:"",body:"红包下限不能大于红包上限"});
				} else 
                if(parseInt(scope.salefrobj.profit_ratio) >= 0 && parseInt(scope.salefrobj.profit_ratio) <= 100 && parseInt(scope.salefrobj.rebate_unlimited) >= 0 && scope.salefrobj.rebate_lower <= scope.salefrobj.rebate_unlimited){
                    $resource('/api/as/tc/saleshangkeprice/save', {}, {})
                    .save(scope.salefrobj,function(res){
                        console.log(scope.salefrobj);
                        if(res.errcode !== 0)
                        {
                            toaster.success({title:"",body:res.errmsg});
                            return;
                        }
						toaster.success({title:"",body:"添加成功"});

                        })
                } else if(scope.salefrobj.rebate_lower > scope.salefrobj.rebate_unlimited){
					toaster.success({title:"",body:"hongnann"});
				} else {
					toaster.success({title:"",body:"设置正确的利润率(0-100),红包上限不能为负数"});
				}
				
			};
		   
		}

	};
};

