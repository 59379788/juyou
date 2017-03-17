module.exports = function($resource, $state, $http, $q){

	return {

		restrict : 'AE',
		template : require('../views/p_baseinfo.html'),
		replace:true,
		scope:{
			'placeobj' : '=',
			'baseinfo' : '=',
			// 'util' : '=',
		},
		link : function(scope, elements, attrs){

			var obj = {
				'name' : '',
				'subname' : '',
				'address' : '',
				'content' : '',
				// 'province' : '',	//省
				// 'city' : '',		//市
				// 'district' : '',	//区
				// 'business_district' : '', 	//商圈
				'province' : '0',	//省
				'city' : '0',		//市
				'district' : '0',	//区
				'business_district' : '0', 	//商圈
				'open_date' : '',	//开放日期
				'open_time' : '',	//营业时间
				'longitude' : '0',	//经度
				'latitude' : '0',	//纬度
				'asort'	: 0,	
				'theme'	: '',	//主题
				'star' : '5',
				'img' : '',		//顶图
				'logo' : '',
			}

			angular.extend(scope.placeobj, obj);
			console.log(scope.placeobj.id);

			if(scope.placeobj.id !== ''){
				$resource('/api/as/tc/place/info', {}, {})
				.get({'id' : scope.placeobj.id}, function(res){

					console.log(res);
					if(res.errcode !== 0){
						alert(res.errmsg);
						return;
					}

					angular.extend(scope.placeobj, res.data);
					console.log(scope.placeobj);
				});
			}
			


			scope.save = function(){

				console.log(scope.placeobj);

				var url = '';
				if(scope.placeobj.id == ''){
					url = '/api/as/tc/place/create';
				}else{
					url = '/api/as/tc/place/update';
				}

				$resource(url, {}, {}).save(scope.placeobj, function(res){
					console.log(res);
					if(res.errcode != 0){
						alert(res.errmsg);
						return;
					}
					if(angular.isDefined(res.data.uuid)){
						$state.go('app.editview', {'placeid' : res.data.uuid});
					}else{
						alert('修改成功');
					}
					

				});
			};
		}
	};
};

