module.exports = function ($state, $resource, toaster) {

    return {

        restrict: 'E',
        template: require('../views/priceSetting.html'),
        replace: true,
        scope: {
            'saleobj': '=',
            'funobj': '=',
            'baseinfo': '=',
            'util': '='
        },
        link: function (scope, elements, attrs) {

            var obj = {
				'id': scope.saleobj.id,
				// 'name': '',
				// 'name_inside': '',
				'code': '',
				// 'price_type': '0',
				'market_price': 0,
				'guide_price': 0,
				'cost_price': 0,
				'purchase_price': 0,
				// 'asort': '0',
				// 'sale_category': 'F10',
				// 'sms_template_id': '',
				// 'sms_diy': '',
				// 'sms_type': '1',
				// 'top_pic' : '',
				// 'logo' : '',
				// 'periodstart': '',
				// 'periodend': '',
				// 'sale_belong': 'juyou',	//产品所属
				// 'sys_affirm_type': '1',	//系统确认
				// 'pay_type' : '0', 	//支付类型
				// 'stock_type' : '0',	//库存类型
				// 'current_stock_num' : 0,
				// 'sale_target_type' : '0',	//销售目标
				// 'take_effect_type' : 0,	//生效时间
				// 'max_limit' : 0,	//最大购买数量
				// 'order_num_limit' : 0,	//每单最大购买数量限制
				// 'tour_date_type' : '0',	//是否启用出游时间
				// 'back_type' : '0',	//是否允许退票
				// 'apply_state' : '0',	//退票是否需要审核
				// 'ticket_type' : '0',	//是否出票
				// 'user_status' : '0',	//是否实名制
				// 'sms_ticketcode_type' : '0',	//短信票码类型
				// 'bookingnotes' : '',	//团产品预订须知
				// 'detail' : '',	//销售品简介
			};

            scope.save = function () {
				var url = '/api/as/tc/sale/update';
				var para = {};
                for (var key in obj) {
                    para[key] = scope.saleobj[key];
                }
				$resource(url, {}, {}).save(para, function (res) {
					if (res.errcode != 0) {
						toaster.error({ title: "提示", body: res.errmsg });
						return;
					}
					toaster.success({ title: "提示", body: '操作成功' });
				});

			};

            scope.saveAndBack = function () {
				var url = '/api/as/tc/sale/update';
				var para = {};
                for (var key in obj) {
                    para[key] = scope.saleobj[key];
                }
				$resource(url, {}, {}).save(para, function (res) {
					if (res.errcode != 0) {
						toaster.error({ title: "提示", body: res.errmsg });
						return;
					}
					toaster.success({ title: "提示", body: '操作成功' });
					scope.util.$uibModalInstance.close();
				});

			};

        }
    };

};


