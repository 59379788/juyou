module.exports = function($resource, $state, $http, $q){

	return {

		restrict : 'AE',
		template : require('../views/p_store.html'),
		replace:true,
		scope:{
			'placeobj' : '=',
		},
		link : function(scope, elements, attrs){

			scope.storeobj = {
				'merchant_id' : '',
				'merchant_label' : '',
				'merchant_channel' : '',
				'merchant_shop_activity' : '',
				'merchant_activity_profile' : '',
				'merchant_label_marking' : '',
				'merchant_pay_method' : 0,
				'merchant_per_average_consume' : '',
				'merchant_remarks': '',
				'merchant_asort' : '',
				'view_type' : ''
			}

			// 获取类型列表
			$resource('/api/us/mc/mertradetypedao/findByTypeList', {}, {})
			.get({'type':'cheap_menu'},function(res){				
				if(res.errcode === 0){
					console.log('5555555555');
					console.log(res);
					scope.typedatas = res.data;
					//ScopedCredential.storeobj.view_type = res.data
				}else if(res.errcode === 10003){

				}else{
					alert(res.errmsg);
				}
			});


			
			console.log(scope.placeobj.id);

			$resource('/api/as/tc/placemerchant/info', {}, {})
			.get({'merchant_id' : scope.placeobj.id}, function(res){

				console.log(res);
				if(res.errcode === 0){
					angular.extend(scope.storeobj, res.data);
					console.log(scope.storeobj);
				}else if(res.errcode === 10003){

				}else{
					alert(res.errmsg);
				}
			});

			scope.save = function(){

				console.log(scope.storeobj);

				
				if(scope.placeobj.id == ''){
					url = '/api/as/tc/placemerchant/create';
				}else{
					url = '/api/as/tc/placemerchant/update';
				}

				scope.storeobj['merchant_id'] = scope.placeobj.id;

				$resource(url, {}, {}).save(scope.storeobj, function(res){
					console.log(res);
					if(res.errcode != 0){
						alert(res.errmsg);
						return;
					}
					
					alert('修改成功');
				});
			};

			
		   
		}

	};
};

