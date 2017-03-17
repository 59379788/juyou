module.exports = function($resource, $state, $http, $q){

	return {

		restrict : 'AE',
		template : require('../views/p_view.html'),
		replace:true,
		scope:{
			'placeobj' : '=',
		},
		link : function(scope, elements, attrs){

			scope.viewobj = {
				'tel' : '',
				'view_type' : 0,
				'promise' : '',
				'ev_good' : 0,
				'ev_general' : 0,
				'ev_bad' : 0,
				'view720_url' : '',
				'ebook_url' : '',
				'fav_policy' : '',
				'bef_hour' : 0,
			}

			console.log(scope.placeobj.id);

			$resource('/api/as/tc/placeview/info', {}, {})
			.get({'place_id' : scope.placeobj.id}, function(res){

				console.log(res);
				if(res.errcode === 0){
					angular.extend(scope.viewobj, res.data);
					console.log(scope.viewobj);
				}else if(res.errcode === 10003){

				}else{
					alert(res.errmsg);
				}
			});

			scope.save = function(){

				console.log(scope.viewobj);

				var url = '/api/as/tc/placeview/create';
				// if(scope.placeobj.id == ''){
				// 	url = '/api/as/tc/placeview/create';
				// }else{
				// 	url = '/api/as/tc/placeview/update';
				// }

				scope.viewobj['place_id'] = scope.placeobj.id;

				$resource(url, {}, {}).save(scope.viewobj, function(res){
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

