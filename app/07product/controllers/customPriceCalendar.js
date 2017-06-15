/**
 * 模态框
 */
module.exports = function ($scope, $state, $resource, $stateParams, $uibModalInstance, $http, items) {

	console.log(items)

	$scope.saleobj = items.data;
	$scope.tour = items.date;
	$scope.selectedDate = [{ date: $scope.tour }];

	$scope.save = function () {
		var result = [];
		var para = {};
		for (var index = 0; index < $scope.selectedDate.length; index++) {
			var element = $scope.selectedDate[index].date + '';
			result.push({
				id: items.dateArray[element],
				date: element,
				sale_code: items.sale_code,
				market_price: $scope.saleobj.market_price,
				guide_price: $scope.saleobj.guide_price,
				cost_price: $scope.saleobj.cost_price,
				purchase_price: $scope.saleobj.purchase_price
			});
		}
		para.daylist = result;
		$resource('/api/ac/tc/ticketSaleDayPriceService/createDayPrice', {}, {}).save(para, function (res) {
			if (res.errcode === 0) {
				toaster.success({ title: '', body: '保存成功' });
				$uibModalInstance.close({});
			} else {
				toaster.warning({ title: '', body: res.errmsg });
				$scope.lastResult = [];
			}
		});
		$uibModalInstance.close({});
	}

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

	function date2str(d) {
		if (d === undefined) {
			return "";
		}
		var month = (d.getMonth() + 1).toString();
		var day = d.getDate().toString();
		if (month.length == 1) month = '0' + month;
		if (day.length == 1) day = '0' + day;
		return d.getFullYear() + "-" + month + "-" + day;
	}

	function dataScope(value1, value2) {
		var getDate1 = function (str) {
			var tempDate = new Date();
			var list = str.split("-");
			tempDate.setFullYear(list[0]);
			tempDate.setMonth(list[1] - 1);
			tempDate.setDate(list[2]);
			return tempDate;
		}
		var date1 = getDate1(value1);
		var date2 = getDate1(value2);
		if (date1 > date2) {
			var tempDate = date1;
			date1 = date2;
			date2 = tempDate;
		}
		date2.setDate(date2.getDate() + 1);
		var dateArr = [];


		while (!(date1.getFullYear() == date2.getFullYear()
			&& date1.getMonth() == date2.getMonth()
			&& date1.getDate() == date2.getDate())) {

			var dayStr = date1.getDate().toString();
			if (dayStr.length == 1) {
				dayStr = "0" + dayStr;
			}

			var month = (date1.getMonth() + 1).toString();
			if (month.length == 1) month = '0' + month;
			dateArr.push(date1.getFullYear() + "-" +
				month + "-"
				+ dayStr);

			date1.setDate(date1.getDate() + 1);

		}
		return dateArr;
	}

};