module.exports = function($resource, $state, $http, $q,toaster){

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
				'merchant_pay_method' : '',
				'merchant_per_average_consume' : 0,
				'merchant_remarks': '',
				'merchant_asort' : '',
				//'view_type' : ''
			}
			scope.strobj = {
				'checkstr1' : '',
				'checkstr2' : ''
			}


			// // 获取类型列表
			// $resource('/api/us/mc/mertradetypedao/findByTypeList', {}, {})
			// .get({'type':'cheap_menu'},function(res){				
			// 	if(res.errcode === 0){
			// 		console.log(res);
			// 		scope.typedatas = res.data;
			// 		//ScopedCredential.storeobj.view_type = res.data
			// 	}else if(res.errcode === 10003){

			// 	}else{
			// 		alert(res.errmsg);
			// 	}
			// });


			
			console.log(scope.placeobj.id);

			$resource('/api/as/tc/placemerchant/info', {}, {})
			.get({'merchant_id' : scope.placeobj.id}, function(res){
				console.log('rrrrrrr');
				console.log(res);
				if(res.errcode === 0){
					angular.extend(scope.storeobj, res.data);
					console.log(scope.storeobj);
				}else if(res.errcode === 10003){

				}else{
					toaster.success({title:"",body:res.errmsg});
				}
			});

			scope.save = function(){

				console.log(scope.storeobj);
				url = '/api/as/tc/placemerchant/save';

				scope.storeobj['merchant_id'] = scope.placeobj.id;
				if(scope.storeobj.merchant_per_average_consume != ''){
					$resource(url, {}, {}).save(scope.storeobj, function(res){
						console.log(res);
						if(res.errcode != 0){
							alert(res.errmsg);
							return;
						}
						toaster.success({title:"",body:"修改成功!"})
					});
				} else {
					toaster.success({title:"",body:"人均消费不能为空!"})
				}
				
			};

			
		   
		}

	};
};

