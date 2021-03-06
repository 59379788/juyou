module.exports = function ($scope, $state, mechanism, $uibModal, countByCompnycode, toaster, getDate, Excel, $timeout,
	ITEMS_PERPAGE) {

	$scope.objs = [];
	$scope.ExcelName = '';

	$scope.searchform = {};
	$scope.searchform.company_type = '1';
	$scope.searchform.ticket_type = '1';
	$scope.tempData = {};
	$scope.tempSearchData = {};
	$scope.selectedCompany = '';

	$scope.ticket_type_flag = $scope.searchform.ticket_type;

	//有效区间
	$scope.section = {};
	$scope.section.start = {};
	// $scope.section.start.date = new Date();

	$scope.section.end = {};
	// $scope.section.end.date = new Date();


	$scope.open = function (obj) {
		obj.opened = true;
	};

	$scope.clearDate = function (obj) {
		delete obj.date;
	};

	$scope.code = '';
	$scope.officeid = '';

	//当前的id
	$scope.currentid = '';
	$scope.currentcode = '';
	$scope.currentname = '';

	$scope.editshow = false;

	//机构树
	function mechanismtree() {
		mechanism.query({}, function (res) {
			console.log(res);
			$scope.tempData = angular.copy(res);
			console.log($scope.tempData);
			var dlq = transData(res, 'id', 'pId', 'nodes');
			$scope.data = dlq;
			// console.log($scope.data);
			// $scope.currentid = $scope.data[0].id;
			// $scope.currentcode = $scope.data[0].code;
			// $scope.currentname = $scope.data[0].name;
			// $scope.load($scope.data[0].id, $scope.data[0].name);
		});
	}
	mechanismtree();

	function transData(a, idStr, pidStr, chindrenStr) {
		var r = [],
			hash = {},
			id = idStr,
			pid = pidStr,
			children = chindrenStr,
			i = 0,
			j = 0,
			len = a.length;

		for (; i < len; i++) {
			hash[a[i][id]] = a[i];
		}

		for (; j < len; j++) {
			var aVal = a[j],
				hashVP = hash[aVal[pid]];

			if (hashVP) {
				!hashVP[children] && (hashVP[children] = []);
				hashVP[children].push(aVal);
			} else {
				r.push(aVal);
			}

		}
		return r;
	}

    /* 分页
     * ========================================= */
	$scope.maxSize = 5;            //最多显示多少个按钮
	$scope.bigCurrentPage = 1;      //当前页码
	$scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条


	$scope.myKeyup = function (e) {

		//IE 编码包含在window.event.keyCode中，Firefox或Safari 包含在event.which中
		var keycode = window.event ? e.keyCode : e.which;
		if (keycode == 13) {
			$scope.load();
		}
	};

	$scope.load = function () {

		console.log($scope.section);
		if (!($scope.section.start.date && $scope.section.end.date)) {
			alert('请选择统计时间');
			return false;
		}
		if (!$scope.selectedCompany) {
			alert('请选择机构');
			return false;
		}
		$scope.ExcelName = getDate($scope.section.start.date) + '至' + getDate($scope.section.end.date);

		var para = {
			pageNo: $scope.bigCurrentPage,
			pageSize: $scope.itemsPerPage,
			start_date: getDate($scope.section.start.date),
			end_date: getDate($scope.section.end.date)
		};

		para = angular.extend($scope.searchform, para);

		countByCompnycode.save(para, function (res) {
			if (res.errcode != 0) {
				toaster.error({ body: res.errmsg })
			}
			$scope.ticket_type_flag = $scope.searchform.ticket_type;
			if (res.data[0]) {
				$scope.objs = res.data;
			} else {
				$scope.objs = [];
			}
			$scope.bigTotalItems = res.count;
		});

	};
	// $scope.load();

	$scope.getit = function (obj) {
		$scope.tempSearchData = obj.$modelValue.id;
		$scope.tempSearchData = {
			id: obj.$modelValue.id,
			name: obj.$modelValue.name,
			code: obj.$modelValue.code
		};
		$scope.selectedCompany = obj.$modelValue.name;
	};

	$scope.orderSearch = function () {
		$scope.searchform.code = $scope.tempSearchData.code;
		$scope.searchform.list = [];

		for (var index = 0; index < $scope.tempData.length; index++) {
			var element = $scope.tempData[index];
			if (element.pId == $scope.tempSearchData.id) {
				$scope.searchform.list.push({ code: element.code, list: [], id: element.id });
			}
		}

		for (var index = 0; index < $scope.searchform.list.length; index++) {
			var element = $scope.searchform.list[index];
			for (var index_temDat = 0; index_temDat < $scope.tempData.length; index_temDat++) {
				var tempArray = [];
				tempArray = $scope.tempData[index_temDat].pIds.split(',');
				for (var index_temArr = 0; index_temArr < tempArray.length; index_temArr++) {
					if (tempArray[index_temArr] == element.id) {
						$scope.searchform.list[index].list.push($scope.tempData[index_temDat].code);
						break;
					}
				}
			}
		}

		$scope.load();
	}

	$scope.infringementNotices = [
		{
			IsPay: '扣款',
			Operate: '通知'
		}
	];

	$scope.exportToExcel = function (tableId) {
		$timeout(function () {
			document.getElementById("dlink").href = Excel.tableToExcel(tableId, 'sheet1');
			//document.getElementById("dlink").download = "1122b.xls";//这里是关键所在,当点击之后,设置a标签的属性,这样就可以更改标签的标题了
			document.getElementById("dlink").click();
		}, 100); // trigger download

		
		// $scope.exportHref = Excel.tableToExcel(tableId, '哈哈哈哈哈sheet1');
		// $timeout(function () { location.href = $scope.exportHref; }, 100); // trigger download
	}

};