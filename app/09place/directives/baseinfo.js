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
				'province' : '',	//省
				'city' : '',		//市
				'district' : '',	//区
				'business_district' : '', 	//商圈
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
			console.log('99999999');
			console.log(scope.placeobj.id);

			scope.page = {};

			var beforedata = {
			    //省份列表
			    'provincelist' :
			    $http({
			        'method' : 'GET', 
			        'url': '/api/us/sc/city/arealist',
			    }),
			    //城市列表
			    'citylist' :
			    $http({
			        'method' : 'GET', 
			        'url': '/api/us/sc/city/arealist',
			        'params' : {'code' : '210000'},
			    }),
			    //区
			    'districtlist' :
			    $http({
			        'method' : 'GET', 
			        'url': '/api/us/sc/city/arealist',
			        'params' : {'code' : '210100'},
			    }),
			};

			if(scope.placeobj.id !== ''){

				beforedata['placeinfo'] = $http({
			        'method' : 'GET', 
			        'url': '/api/as/tc/place/info',
			        'params' : {
			            'id' : scope.placeobj.id
			        }
			    });
			}


			$q.all(beforedata).then(function(res){
				console.log('8888888');
				// 地址信息
				console.log(res);
				//分类信息
			    if(res.provincelist.data.errcode === 0){
			        //console.log(res.categorylist.data);

			    }else{
			        alert(res.provincelist.data.errmsg);
			        return ;
			    }

			    if(res.citylist.data.errcode === 0){
			        //console.log(res.categorylist.data);

			    }else{
			        alert(res.citylist.data.errmsg);
			        return ;
			    }

			    if(res.districtlist.data.errcode === 0){
			        //console.log(res.categorylist.data);

			    }else{
			        alert(res.districtlist.data.errmsg);
			        return ;
			    }

			    if(angular.isDefined(res.placeinfo)){
			    	//地点信息
		            if(res.placeinfo.data.errcode === 0){
		            	angular.extend(scope.placeobj, res.placeinfo.data.data);
		            }else{
		            	alert(res.placeinfo.data.errmsg);
		            	return
		            }
		        }

		        scope.page = {
		        	'provincelist' : res.provincelist.data.data,
		        	'citylist' : res.citylist.data.data,
		        	'districtlist' : res.districtlist.data.data,
		        	'business_districtlist' : [],
		        }

		        if(scope.placeobj.province == ''){
		        	scope.placeobj.province = '210000';	//辽宁省
		        	scope.placeobj.city = '210100';		//沈阳市
		        	scope.placeobj.district = '';		//铁西区
		        	//scope.placeobj.business_district = ''	//xxx商圈
		        }

			});

			scope.save = function(){
				console.log('9999999');
				console.log(scope.placeobj);

				var url = '';
				if(scope.placeobj.id == ''){
					url = '/api/as/tc/place/create';
				}else{
					url = '/api/as/tc/place/update';
				}
				if(!scope.placeobj.longitude){
					scope.placeobj.longitude = 0;
				}
				if(!scope.placeobj.latitude){
					scope.placeobj.latitude = 0;
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

			//省
			scope.changeprovince = function(code){
				scope.placeobj.city = '';
				scope.placeobj.district = '';
				scope.placeobj.business_district = '';

				scope.page.citylist = [];
				scope.page.districtlist = [];
				scope.page.business_districtlist = [];

				getarea('province', code);
			};
			//市
			scope.changecity = function(code){
				scope.placeobj.district = '';
				scope.placeobj.business_district = '';

				scope.page.districtlist = [];
				scope.page.business_districtlist = [];

				getarea('city', code);
			};
			//区
			scope.changedistrict = function(code){
				scope.placeobj.business_district = '';
				scope.page.business_districtlist = [];
				getarea('district', code);
			};
			


			function getarea(what, code){
				$resource('/api/us/sc/city/arealist', {}, {})
				.get({'code' : code}, function(res){
					console.log(res);
					if(res.errcode !== 0){
						alert(res.errmsg);
						return;
					}

					if(what === 'province'){
						scope.page.citylist = res.data;
					}else if(what === 'city'){
						scope.page.districtlist = res.data;
					}else if(what === 'district'){
						scope.page.business_districtlist = res.data;
					}
				});
			}

		}
	};
};

