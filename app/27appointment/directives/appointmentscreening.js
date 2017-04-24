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
                'makeAppointmentId' : scope.saleobj.id
            }
			scope.auditing = scope.util.auditing;

			//页面需要的信息。
			scope.page = {};

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


			if (scope.saleobj.id != '') {
				beforedata['saleinfo'] = $http({
					'method': 'GET',
					'url': '/api/as/tc/sale/info',
					'params': {
						'id': scope.saleobj.id
					}
				});
			}


			$q.all(beforedata).then(function (res) {

				// console.log(res);
				// if (angular.isDefined(res.saleinfo)) {
				// 	//销售品信息
				// 	if (res.saleinfo.data.errcode === 0) {
				// 		console.log(res.saleinfo.data);
				// 		//赋值给销售品对象。
				// 		angular.extend(scope.saleobj, res.saleinfo.data.data);
				// 		if (scope.saleobj.periodstart != '') {
				// 			scope.baseinfo.dateshow.periodstart.date = scope.util.str2date(scope.saleobj.periodstart);
				// 		}
				// 		if (scope.saleobj.periodend != '') {
				// 			scope.baseinfo.dateshow.periodend.date = scope.util.str2date(scope.saleobj.periodend);
				// 		}
				// 		console.log('销售品详情赋值');
				// 		console.log(scope.saleobj);
				// 	} else {
				// 		alert('/api/as/tc/sale/info' + res.saleinfo.data.errmsg);
				// 		return;
				// 	}
				// }

				// scope.page = {
				// 	//分类列表
				// 	'categorylist': res.categorylist.data.data,
				// 	//产品所属
				// 	'salebelonglist': res.salebelonglist.data.data,
				// 	//短信列表
				// 	'smslist': res.smslist.data.data,
				// };


			});

            // 场次列表
            scope.findTimeInfoList = function(){
                var url = '';
                url = '/api/as/mc/mermakeappointmentdao/findTimeInfoList';
                $resource(url, {}, {}).save({'makeAppointmentId' : scope.saleobj.id}, function (res) {
                    console.log({'makeAppointmentId' : scope.saleobj.id});
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
                alert('添加');
				scope.info.startTime = scope.util.date2str(scope.baseinfo.dateshow.periodstart.date);
				scope.info.endTime = scope.util.date2str(scope.baseinfo.dateshow.periodend.date);

				//console.log(scope.saleobj);

				var url = '';
				var para = {};
                url = '/api/as/mc/mermakeappointmentdao/saveTime';
                para = scope.info;

				$resource(url, {}, {}).save(para, function (res) {
					console.log(para);
					if (res.errcode != 0) {
						toaster.error({ title: "提示", body: res.errmsg });
						return;
					}

					alert('操作成功');
                    console.log(res);
                    scope.findTimeInfoList();
                    
					// toaster.success({ title: "提示", body: '操作成功' });

				});

			};
			scope.delete = function(id){
				console.log('shanchu ');
				var url = '/api/as/mc/mermakeappointmentdao/updateTimeDel';
				if(confirm('确定要删除吗~~~~亲~')){
					$resource(url, {}, {}).save({'id' : id}, function (res) {
						console.log({'id' : id});
						if (res.errcode != 0) {
							toaster.error({ title: "提示", body: res.errmsg });
							return;
						}

						alert('删除成功');
						console.log(res);
						scope.findTimeInfoList();
						
						// toaster.success({ title: "提示", body: '操作成功' });

					});
				}
				
			}


		}

	};
};

