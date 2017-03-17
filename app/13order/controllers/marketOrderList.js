module.exports = function ($scope, $state, marketOrderList, getDate) {
	$scope.searchform = {};

	//有效区间
	$scope.section = {};
	$scope.section.start = {};
	$scope.section.start.date = new Date();

	$scope.section.end = {};
	$scope.section.end.date = new Date();

	$scope.open = function (obj) {
		obj.opened = true;
	};

    /* 分页
     * ========================================= */
	$scope.maxSize = 5;            //最多显示多少个按钮
	$scope.bigCurrentPage = 1;      //当前页码
	$scope.itemsPerPage = 10;         //每页显示几条

	$scope.load = function () {

		console.log(getDate($scope.section.start.date));
		console.log(getDate($scope.section.end.date));

		var para = {
			pageNo: $scope.bigCurrentPage,
			pageSize: $scope.itemsPerPage,
			start_time: getDate($scope.section.start.date) + " 00:00:00",
			end_time: getDate($scope.section.end.date) + " 23:59:59"
		};

		para = angular.extend($scope.searchform, para);

		console.log('###########');
		console.log(para);
		console.log('##########');

		marketOrderList.save(para, function (res) {

			console.log(res);

			if (res.errcode === 0) {
				$scope.objs = res.data.results;
				$scope.bigTotalItems = res.data.totalRecord;
			}
			else {
				alert(res.errmsg);
			}

		});

	};
	$scope.load();



};