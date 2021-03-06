module.exports = function ($scope, $state, $stateParams, toaster, items, $resource, $uibModalInstance) {

    /**
     * 下方是初始化方法
     */
	$scope.loadupdate = function () {
		var dataobj = {};
		if (angular.isDefined($scope.data) && angular.isArray($scope.data)) {
			for (var i = 0; i < $scope.data.length; i++) {
				var tmp = $scope.data[i];
				dataobj[tmp.d] = tmp;
			}
		}

		var showattrarr = [];
		if (angular.isDefined($scope.showattrarr) && angular.isArray($scope.showattrarr)) {
			showattrarr = $scope.showattrarr;
		}

		$scope.weekarr = ["<font color=red>日</font>", "一", "二", "三", "四", "五", "<font color=red>六</font>"];

		var obj = {};
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth();


		$scope.obj = makedata(year, month, dataobj, showattrarr);

		$scope.pre = function () {
			var dd = getYM($scope.obj.y, $scope.obj.m, -1);
			$scope.obj = makedata(dd.y, dd.m, dataobj, showattrarr);
		};

		$scope.back = function () {
			var dd = getYM($scope.obj.y, $scope.obj.m, 1);
			$scope.obj = makedata(dd.y, dd.m, dataobj, showattrarr);
		};

		function makedata(year, month, dataobj, showattrarr) {
			var montharray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			var obj = {
				'y': year,
				'm': month,
				'data': [],
			};
			if ((obj.m === 1) && (obj.y % 4 === 0)
				&& ((obj.y % 100 !== 0) || (obj.y % 400 === 0))) {
				montharray[1] = 29;
			}
			//1号
			var firstdate = new Date(obj.y, obj.m, 1);
			//最后一号
			var lastdate = new Date(obj.y, obj.m, montharray[obj.m]);

			//1号星期几
			var fxingqi = firstdate.getDay();
			//最后一号星期几
			var lxingqi = lastdate.getDay();

			var dataarr = [];
			//日期之前的空位
			for (var f = 0; f < fxingqi; f++) {
				var dayobj = {
					'label': '',
					'd': '0',
				};
				dataarr.push(dayobj);
			}
			//日期
			for (var j = 0; j < montharray[obj.m]; j++) {
				var dayobj = {
					'label': j + 1,
					'd': obj.y + '-',
					'labelarr': [],	//具体显示的信息
				};

				if (obj.m < 9) {
					dayobj.d += '0' + (obj.m + 1) + '-';
				} else {
					dayobj.d += obj.m + 1 + '-';
				}

				if (j < 9) {
					dayobj.d += '0' + (j + 1);
				} else {
					dayobj.d += (j + 1);
				}

				//有数据要显示。
				var show = dataobj[dayobj.d];
				if (angular.isDefined(dataobj[dayobj.d])) {
					for (var x = 0; x < showattrarr.length; x++) {
						var xx = showattrarr[x];
						var ooo = {
							'show': ((xx.before && show[xx.key]) ? xx.before : '') + (show[xx.key] ? show[xx.key] : '') + ((xx.after && show[xx.key]) ? xx.after : ''),
							'position': xx.position
						};
						dayobj.labelarr.push(ooo);
						dayobj['data'] = show;
					}
				}
				dataarr.push(dayobj);
			}
			//日期之后的空位
			for (var l = lxingqi; l < 6; l++) {
				var dayobj = {
					'label': '',
					'd': '0',
				};
				dataarr.push(dayobj);
			}

			for (var i = 0; i < dataarr.length; i++) {
				//每七个重新组装一个数组。
				var x = i % 7;
				if (x === 0) {
					obj.data.push(new Array());
				}
				obj.data[obj.data.length - 1].push(dataarr[i]);
			}
			return obj;
		}

		//step 负数，之前几个月，-1：表示之前一个月
		//     正数，之后几个月，1 ：表示之后一个月
		function getYM(y, m, step) {
			var yy = y;
			var mm = m;

			if (mm + step < 0) {
				yy -= 1;
				mm = 12 + mm + step;
			} else if (mm + step > 11) {
				yy += 1;
				mm = mm + step - 12;
			} else {
				mm += step;
			}

			return {
				'y': yy,
				'm': mm,
			}
		}
	}

	//日历要显示的数据
	$scope.data = [];

	$scope.result = [];

	$scope.dateArray = {};

	$scope.day = '';

	$scope.product_state_name = '';

	//日历显示信息的顺序和样式
	$scope.showattrarr = [
		{
			key: 'market_price_display',
			position: 'left',
			before: '<font color=red >市场价格: ¥</font>'
		},
		{
			key: 'guide_price_display',
			position: 'left',
			before: '<font color=green >居游价格: ¥</font>'
		},
		{
			key: 'cost_price_display',
			position: 'left',
			before: '<font color=red >成本价格: ¥</font>'
		}
	];

	//每一天的点击事件
	$scope.clickday = function (item) {
		// if (item.label == '') {
		//     return;
		// }
		if(item.d == '0' || item.d == 0){
			toaster.info({ title: '', body: '请选择当月日期' });
			return false;
		}
		var today = date2str(new Date());
		if (item.d < today) {
			toaster.warning({ title: item.d, body: '出游日期不能小于当天日期' });
			return false;
		}
		if (item.labelarr.length < 1) {
			toaster.warning({ title: item.d, body: '未设置价格日期无法选择' });
			return false;
		}
		item.data.date = item.data.d;
		$uibModalInstance.close(item.data);

	};

	//日期转换
	function date2str(d) {
		if (d === undefined) {
			return "";
		}
		var month = (d.getMonth() + 1).toString();
		var day = d.getDate().toString();
		if (month.length == 1) month = '0' + month;
		if (day.length == 1) day = '0' + day;
		return d.getFullYear() + '-' + month + '-' + day;
	}

	//查询数据
	$scope.findinfoList = function () {
		var para = {
			sale_code: items.saleobj.code
		}
		$resource('/api/ac/tc/ticketSaleDayPriceService/getDayPriceBySaleCodeForSale', {}, {}).save(para, function (res) {
			if (res.errcode === 0) {
				$scope.dateArray
				for (var index = 0; index < res.data.daylist.length; index++) {
					var date = res.data.daylist[index].date;
					var id = res.data.daylist[index].id;
					$scope.dateArray[date] = id;
					var element = {};
					element.d = res.data.daylist[index].date;
					element.market_price_display = '<font color=red >' + res.data.daylist[index].market_price + '</font>';
					element.guide_price_display = '<font color=green >' + res.data.daylist[index].guide_price + '</font>';
					element.cost_price_display = '<font color=red >' + res.data.daylist[index].cost_price + '</font>';
					element.market_price = res.data.daylist[index].market_price;
					element.guide_price = res.data.daylist[index].guide_price;
					element.cost_price = res.data.daylist[index].cost_price;
					$scope.data[index] = element;
				}
				$scope.loadupdate();
			} else {
				toaster.warning({ title: '', body: res.errmsg });
			}
		});
	}
	$scope.findinfoList();
}