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
			var obj = {
				'id' : scope.saleobj.id
			}
			angular.extend(scope.saleobj, obj);

			// 获得信息
			if(scope.saleobj.id != ''){
				var url = '/api/as/tc/appoint/getAppointInfo';
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
					url = '/api/as/tc/appoint/setAppoint';
					scope.info = angular.extend(scope.info,scope.para);
				} else {
					url = '/api/as/tc/appoint/saveAppoint';
					
				}
				console.log(scope.info);
				$resource(url, {}, {}).save(scope.info, function(res){
					if(res.errcode != 0){
						toaster.error({title:"",body:res.errmsg});
						return;
					}
					toaster.success({title:"",body:"操作成功!"});
					console.log(res);
					scope.saleobj.id = res.data.uuid;
					console.log('id=' + scope.saleobj.id);
					
				});
			};
        }
    }
}