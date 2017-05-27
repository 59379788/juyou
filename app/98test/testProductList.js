module.exports = function ($scope, $state, getDate, toaster, $uibModal, str2date, $resource) {
	$scope.searchform = {};
	$scope.searchform.pay_type = '1';

	//有效区间
	$scope.section = {};
	$scope.section.start = {};
	$scope.section.start.date = new Date();

	$scope.section.end = {};
	$scope.section.end.date = new Date();

	$scope.open = function (obj) {
		obj.opened = true;
	};
	$scope.device_code = '';

    /* 分页
     * ========================================= */
	$scope.maxSize = 5;            //最多显示多少个按钮
	$scope.bigCurrentPage = 1;      //当前页码
	$scope.itemsPerPage = 10;         //每页显示几条


	$scope.myKeyup = function (e) {

		//IE 编码包含在window.event.keyCode中，Firefox或Safari 包含在event.which中
		var keycode = window.event ? e.keyCode : e.which;
		if (keycode == 13) {
			$scope.load();
		}
	};

	$scope.load = function () {
		var para = {
			pageNo: $scope.bigCurrentPage,
			pageSize: $scope.itemsPerPage,
			start_time: getDate($scope.section.start.date),
			end_time: getDate($scope.section.end.date)
		};
		para = angular.extend($scope.searchform, para);
		// para.code = '17048004900001';
		// para.sale_category = 'F10';
		$resource('/api/uc/tc/equipmentProductService/getProductListByCode', {}, {}).save(para, function (res) {
			if (res.errcode === 0) {
				$scope.objs = res.data;
				$scope.device_code = para.code;
				// $scope.bigTotalItems = res.data.totalRecord;
			}
			else {
				toaster.error({ title: "提示", body: res.errmsg });
			}
		});
	};
	$scope.load();

	$scope.createOrder = function () {
		var order = {
			sale_num: 0,
			num: 0,
			pay_fee: 0,
			device_code: $scope.device_code,
			sale_list: [],
			pay_type:$scope.searchform.pay_type
		};
		for (var index = 0; index < $scope.objs.length; index++) {
			var element = $scope.objs[index];
			if (element.isBuy && element.buyNum) {
				order.sale_list.push({ sale_code: element.sale_code, num: element.buyNum, pay_fee: parseInt(element.cost_price?element.cost_price:0) * parseInt(element.buyNum?element.buyNum:0) });
				order.num += parseInt(element.buyNum?element.buyNum:0);
				order.pay_fee +=  parseInt(element.buyNum?element.buyNum:0) * parseInt(element.cost_price?element.cost_price:0);
			}
		}
		if (order.sale_list.length < 1 || !order.num ) {
			console.log(order.sale_list.length)
			console.log(order.num)
			toaster.warning({ title: "提示", body: '您还未选择产品' });
			return false;
		}
		order.sale_num = order.sale_list.length;
		$resource('/api/ac/tc/equipmentProductService/createOrder', {}, {}).save(order, function (res) {
			if (res.errcode === 0) {
				toaster.info({ title: "订单编号", body: res.data.code });
			}
			else {
				toaster.error({ title: "提示", body: res.errmsg });
			}
		});
	}

};