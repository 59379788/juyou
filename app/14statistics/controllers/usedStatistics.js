module.exports = function ($scope, $state, getDate, $uibModal, DateDiff, $resource, toaster, str2date, $timeout, Excel) {

	$scope.viewarr = [];
	$scope.attrarr = [];
	$scope.totalUsed = 0;

	var searchviewcode = null;

	$scope.total = {
		'buy': 0,
		'used': 0,
		'back': 0,
		'total': 0,
		'gov': 0
	};

	$scope.quchongMap = {};

	//有效区间
	$scope.section = {};
	$scope.section.start = {};
	$scope.section.start.date = str2date(GetDateStr(-1))

	$scope.section.end = {};
	$scope.section.end.date = str2date(GetDateStr(-1))

	$scope.open = function (obj) {
		obj.opened = true;
	};

	$scope.inlineOptions = {
		maxDate: str2date(GetDateStr(-1))
	};

	function GetDateStr(AddDayCount) {
		var dd = new Date();
		dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
		var y = dd.getFullYear();
		var m = dd.getMonth() + 1;//获取当前月份的日期
		var d = dd.getDate();
		return y + "-" + m + "-" + d;
	}
	
	$scope.ExcelName = getDate($scope.section.start.date);

	$scope.load = function () {

		$scope.ExcelName = getDate($scope.section.start.date) + '至' + getDate($scope.section.end.date);

		var fun = $resource('/api/as/tc/ticketstatisticday/list', {}, {});
		var para = {
			start_time: getDate($scope.section.start.date),
			end_time: getDate($scope.section.end.date)
		};

		fun.save(para, function (res) {

			if (res.errcode === 0) {
				$scope.objs = res.data;

				//--- 从结果里搜索出结果里有的景区 -- start
				var viewobj = {};
				var attrobj = {};
				var attrindex = 0;
				$scope.viewarr.splice(0, $scope.viewarr.length);
				$scope.attrarr.splice(0, $scope.attrarr.length);
				for (var index = 0; index < res.data.length; index++) {
					var element = res.data[index];
					if (element.destory_view === undefined) {
						$scope.viewarr.push({ code: element.place_name, name: element.place_name });
						continue;
					}
					$scope.viewarr.push({ code: element.destory_view, name: element.place_name })
					$scope.quchongMap[element.destory_view] = element.place_name;
				}
				for (var key in $scope.quchongMap) {
					var element = $scope.quchongMap[key];
					$scope.attrarr.push({ code: key, name: element})
				}
				calcTotal();
			}
			else {
				alert(res.errmsg);
			}

		});

	};
	$scope.load();


	//景区下拉
	$scope.change = function (x) {
		searchviewcode = x;
		calcTotal();
	}

	//属性点击事件
	$scope.checkattr = function () {
		calcTotal();
	}

	//结果过滤器
	$scope.myFilter = function (item) {
		if (!$scope.viewcode) {
			return true;
		}
		var resulst = false;
		for (var index = 0; index < $scope.viewarr.length; index++) {
			var element = $scope.viewarr[index];
			if (item.destory_view === $scope.viewcode) {
				return true;
			}
		}
		return resulst;
	};

	//计算统计
	function calcTotal() {
        $scope.totalUsed = 0;
		for (var index = 0; index < $scope.objs.length; index++) {
			var element = $scope.objs[index];
			if (!$scope.viewcode || element.destory_view === $scope.viewcode) {
				$scope.totalUsed += parseInt(element.used)
			}
		}
	}


	function getAttr(typename) {
		var start = typename.indexOf('【') + 1;
		var end = typename.indexOf('】');
		return typename.slice(start, end);
	}

	$scope.exportToExcel = function (tableId) {
		$timeout(function () {
			document.getElementById("dlink").href = Excel.tableToExcel(tableId, 'sheet1');
			//document.getElementById("dlink").download = "1122b.xls";//这里是关键所在,当点击之后,设置a标签的属性,这样就可以更改标签的标题了
			document.getElementById("dlink").click();
		}, 100); // trigger download
	}

};