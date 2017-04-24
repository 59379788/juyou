module.exports = function ($resource, $state, $http, $q, FileUploader, toaster) {

	return {

		restrict: 'AE',
		template: require('../views/appointmentbaseinfo.html'),
		replace: true,
		scope: {
			'saleobj': '=',
			'funobj': '=',
			'baseinfo': '=',
			'util': '=',
		},
		link: function (scope, elements, attrs) {
			console.log('基本信息界面的id');
			console.log(scope.saleobj.id);
			scope.auditing = scope.util.auditing;
			var obj = {
				'id' : scope.saleobj.id
			}
			angular.extend(scope.saleobj, obj);
			
			var beforedata = {
				//类型列表
				'categorylist':
				$http({
					'method': 'GET',
					'url': '/api/as/sc/dict/dictbytypelist',
					'params': { 'type': 'sale_category' },
				}),
				//产品所属
				'salebelonglist':
				$http({
					'method': 'GET',
					'url': '/api/as/sc/dict/dictbytypelist',
					'params': { 'type': 'ticket_sale_belong' },
				}),
				//短信信息
				'smslist':
				$http({
					'method': 'GET',
					'url': '/api/as/tc/salesmstemplate/list',
				}),
			};

			// 获得信息
			if(scope.saleobj.id != ''){
				var url = '/api/as/mc/mermakeappointmentdao/getMakeAppointmentById';
				$resource(url, {}, {}).save({'id' : scope.saleobj.id}, function(res){
					if(res.errcode != 0){
						alert(res.errmsg);
						return;
					}
					console.log('详情');
					console.log(res);
					scope.info = res.data;
					// scope.saleobj.id = res.data.uuid;
					
				});
			}


			scope.save = function(){
				console.log(scope.saleobj.id);
				scope.para = {
					'id' : scope.saleobj.id
				}
				var url = '';
				if(scope.saleobj.id) {
					// 编辑
					url = '/api/as/mc/mermakeappointmentdao/updateMakeAppointment';
					scope.info = angular.extend(scope.info,scope.para);
				} else {
					url = '/api/as/mc/mermakeappointmentdao/insertMakeAppointment';
					
				}
				console.log(scope.info);
				$resource(url, {}, {}).save(scope.info, function(res){
					if(res.errcode != 0){
						alert(res.errmsg);
						return;
					}
					alert('保存成功');
					console.log(res);
					scope.saleobj.id = res.data.uuid;
					console.log('id=' + scope.saleobj.id);
					
				});
			};
        }
    }
}