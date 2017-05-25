module.exports = function ($resource, $state, $http, $q, FileUploader, toaster) {

	return {

		restrict: 'AE',
		template: require('../views/appointmentscreening.html'),
		replace: true,
		scope: {
			'saleobj': '=',
			'funobj': '=',
			'baseinfo': '=',
			'util': '=',
		},
		link: function (scope, elements, attrs) {
			console.log('场次界面的id');
            console.log(scope.saleobj.id);
            scope.info = {
                'appoint_id' : scope.saleobj.id
            }
			scope.auditing = scope.util.auditing;

			//页面需要的信息。
			scope.page = {};

            // 场次列表
            scope.findTimeInfoList = function(){
                var url = '';
                url = '/api/as/tc/appoint/findAppointTimeList';
                $resource(url, {}, {}).save({'appoint_id' : scope.saleobj.id}, function (res) {
					if (res.errcode != 0) {
						toaster.error({ title: "提示", body: res.errmsg });
						return;
					}
                    console.log('场次列表');
                    console.log(res);
                    scope.time_list = res.data;
                    // scope.obj.section.periodstart.date = scope.util.str2date(scope.res.date.startTime);
                    // scope.obj.section.periodend.date = scope.util.str2date(scope.res.date.endTime);                    
					// toaster.success({ title: "提示", body: '操作成功' });

				});
            }
            scope.findTimeInfoList();
            // 添加
			scope.add = function () {
				scope.info.start_time = scope.util.date2str(scope.baseinfo.dateshow.periodstart.date);
				scope.info.end_time = scope.util.date2str(scope.baseinfo.dateshow.periodend.date);
				var url = '';
				var para = {};
                url = '/api/as/tc/appoint/saveAppointTime';
                para = scope.info;

				$resource(url, {}, {}).save(para, function (res) {
					console.log(para);
					if (res.errcode != 0) {
						toaster.error({ title: "提示", body: res.errmsg });
						return;
					}
					toaster.success({title:"",body:"操作成功!"});
                    console.log(res);
                    scope.findTimeInfoList();
                    
					// toaster.success({ title: "提示", body: '操作成功' });

				});

			};
			scope.delete = function(id){
				console.log('shanchu ');
				var url = '/api/as/tc/appoint/setAppointTimeDel';
				if(confirm('确定要删除吗~~~~亲~')){
					$resource(url, {}, {}).save({'id' : id}, function (res) {
						console.log({'id' : id});
						if (res.errcode != 0) {
							toaster.error({ title: "提示", body: res.errmsg });
							return;
						}
						toaster.success({title:"",body:"删除成功!"});						
						console.log(res);
						scope.findTimeInfoList();
						
						// toaster.success({ title: "提示", body: '操作成功' });

					});
				}
				
			}

			scope.save = function(obj){
				var url = '/api/as/tc/appoint/setAppointTime';
				$resource(url, {}, {}).save(obj, function (res) {
					console.log(obj);
					if (res.errcode != 0) {
						toaster.error({ title: "提示", body: res.errmsg });
						return;
					}
					toaster.success({title:"",body:"修改成功!"});						
					console.log(res);
					scope.findTimeInfoList();
					
					// toaster.success({ title: "提示", body: '操作成功' });

				});
				
			}


		}

	};
};

