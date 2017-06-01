module.exports = function ($resource, $state, $http, $q, FileUploader, toaster) {

	return {

		restrict: 'AE',
		template: require('../views/appointmentticket.html'),
		replace: true,
		scope: {
			'saleobj': '=',
			'funobj': '=',
			'baseinfo': '=',
			'util': '=',
		},
		link: function (scope, elements, attrs) {
			// 获取产品,票种信息
			scope.productinfo = {
				'sale_code': '',
				'ticket_code': ''
			}
			// 添加产品票种
			scope.tickettypeobj = {
				'appoint_id': scope.saleobj.id,
				'sale_code': '',
				'sale_name': '',
				'ticket_code': '',
				'ticket_name': ''
			};
			scope.searchform = {
				'selected': {
					'name': ''
				}
			}
			scope.ticketsearchform = {
				'selected': {
					'name': ''
				}
			}

			scope.tickettypelist = [];

			//页面需要的数据
			scope.page = {};

			var beforedata = {
				// 销售品列表
				'productlist':
				$http({
					'method': 'GET',
					'url': '/api/as/tc/appoint/findSaleList',
				}),
				//景区列表
				'viewlist':
				$http({
					'method': 'GET',
					'url': '/api/as/tc/placeview/jlist',
				}),
				//票种属性
				'attrlist':
				$http({
					'method': 'GET',
					'url': '/api/as/tc/attr/list',
				}),
			};
			// 票种列表
			scope.ticketlist = function () {
				$resource('/api/as/tc/appoint/findAppointSaleList', {}, {})
					.save({ 'appoint_id': scope.saleobj.id }, function (res) {
						if (res.errcode !== 0) {
							toaster.error({ title: "", body: res.errmsg });
							return;
						}
						scope.ticket_list = res.data;

					});
			}
			scope.ticketlist();

			$q.all(beforedata).then(function (res) {
				if (res.productlist.data.errcode === 0) {
				} else {
					alert('/api/as/tc/sale/alllist' + res.viewlist.data.errmsg);
					return;
				}

				if (res.viewlist.data.errcode === 0) {
				} else {
					alert('/api/as/tc/placeview/jlist' + res.viewlist.data.errmsg);
					return;
				}

				if (res.attrlist.data.errcode === 0) {
					scope.tickettypeobj.ticket_type_attr = res.attrlist.data.data[0].ticket_attr_id;
				} else {
					alert('/api/as/tc/attr/list' + res.attrlist.data.errmsg);
					return;
				}

				// gettickettypedetail();

				scope.page = {
					'productlist': res.productlist.data.data,
					'viewlist': res.viewlist.data.data,
					'attrlist': res.attrlist.data.data,
					'tickettypelist': [],
					//'saletickettypelist' : res.saletickettypelist.data.data,
				}

			});

			//票种
			scope.changeview = function (searchform) {
				var sale_code = searchform.selected.code;
				scope.tickettypeobj.sale_name = scope.searchform.selected.name;
				scope.tickettypeobj.sale_code = scope.searchform.selected.code;
				scope.tickettypeobj.ticket_code = scope.ticketsearchform.selected.ticket_type_code;
				scope.tickettypeobj.ticket_name = scope.ticketsearchform.selected.name;

				$resource('/api/us/tc/appoint/findAppointTicketTypeList', {}, {})
					.save({ 'sale_code': sale_code }, function (res) {
						if (res.errcode !== 0) {
							toaster.error({ title: "", body: res.errmsg });
							return;
						}
						scope.page.tickettypelist = res.data;
					});
			};

			//添加票种
			scope.add = function () {

				scope.tickettypeobj.sale_name = scope.searchform.selected.name;
				scope.tickettypeobj.sale_code = scope.searchform.selected.code;
				scope.tickettypeobj.ticket_code = scope.ticketsearchform.selected.ticket_type_code;
				scope.tickettypeobj.ticket_name = scope.ticketsearchform.selected.name;

				for (var index = 0; index < scope.ticket_list.length; index++) {
					var element = scope.ticket_list[index];
					if(scope.tickettypeobj.sale_code == element.sale_code && scope.tickettypeobj.ticket_code == element.ticket_code){
						toaster.warning({ title: "", body: "票种已添加，请勿重复添加" });
						return false;
					}
				}

				$resource('/api/as/tc/appoint/saveAppointSale', {}, {})
					.save(scope.tickettypeobj, function (res) {
						if (res.errcode !== 0) {
							toaster.error({ title: "", body: res.errmsg });
							return;
						}
						toaster.success({ title: "", body: "操作成功" });
						scope.ticketlist();

						// gettickettypedetail();
					});
			};
			scope.delete = function (id) {
				var url = '/api/as/tc/appoint/setAppointSaleDel';
				if (confirm('确定要删除吗~~~~亲~')) {
					$resource(url, {}, {}).save({ 'id': id }, function (res) {
						if (res.errcode != 0) {
							toaster.error({ title: "提示", body: res.errmsg });
							return;
						}
						toaster.success({ title: "", body: "删除成功" });
						scope.ticketlist();
					});
				}
			}
		}
	};
};