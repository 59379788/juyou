module.exports = function ($scope, $state, $stateParams, namelist, info,
	createorder, IdentityCodeValid, getuserinfobymobile, createSubsidyOrder, $uibModal, 
	getDate) {

	//类别
	$scope.sale_category = $stateParams.type;

	$scope.price_type = '0';
	$scope.saleobj = {};
	$scope.product = {};

	//显示购票界面
	$scope.show = false;

	$scope.price_type_arr = {};

	$scope.obj = {
		'name': '',
		//最大购票数量
		'max': 99
	};

	//订单对象
	$scope.order = {
		'name': '',
		'cardno': '',
		'mobile': '',
		'num': 0,
		'tour_date': ''
	};

	//出游时间
	$scope.section = {};
	$scope.section.start = {};
	//$scope.section.start.date = new Date();

	$scope.open = function (obj) {
		obj.opened = true;
	};

	$scope.inlineOptions = {
		minDate: new Date()
	};

	// $scope.order.name = 'dlq';
	// $scope.order.cardno = '210302198308022412';
	// $scope.order.mobile = '13840188285';
	// $scope.order.num = 3;

	//$scope.order.payment_type = '8';

	//销售品树
	namelist.get({ 'sale_category': $scope.sale_category }, function (res) {

		if (res.errcode !== 0) {
			alert(res.errmsg);
			return;
		}

		var len = res.data.length,
			r = {},
			i = 0;

		for (; i < len; i++) {

			var tmp = res.data[i];

			var o = {};
			o.id = tmp.id;
			o.price_type = tmp.price_type;
			o.code = tmp.sale_code;
			o.name = tmp.sale_name;
			o.guide_price = tmp.guide_price;
			o.market_price = tmp.market_price;
			o.govsubsidy_price = tmp.govsubsidy_price;
			o.cost_price = tmp.cost_price;
			o.tour_date_type = tmp.tour_date_type;
			if ($scope.sale_category === 'F11'
				|| $scope.sale_category === 'F15') {
				o.unavailable = true;
			}

			if (!r.hasOwnProperty(tmp.place_code)) {
				r[tmp.place_code] = {};
				r[tmp.place_code].name = tmp.place_name;
				r[tmp.place_code].nodes = [];
				r[tmp.place_code].unavailable = false;
			}

			r[tmp.place_code].nodes.push(o);
			$scope.price_type_arr[tmp.sale_code] = tmp.price_type;
			// $scope.price_type_arr[i][tmp.sale_code] = tmp.price_type;
		}

		$scope.data = r;
		// $scope.data = [];
		// angular.forEach(r, function (value, key) {
		//     $scope.data.push(r[key]);
		// });

	});


	$scope.visible = function (item) {

		return !($scope.query && $scope.query.length > 0
			&& item.name.indexOf($scope.query) == -1);

	};


	$scope.getit = function (obj) {
		console.log($scope.price_type_arr)
		console.log(obj)
		console.log(obj.$modelValue)

		if (obj.$modelValue === undefined) return;

		if (obj.$modelValue.unavailable) return;

		$scope.show = true;

		$scope.saleobj = obj.$modelValue;
		$scope.price_type = $scope.price_type_arr[obj.$modelValue.code]

		//销售品编号，用于下单
		$scope.order.sale_code = obj.$modelValue.code;
		//销售品名称，用于显示
		$scope.obj.name = obj.$modelValue.name;

		$scope.obj.id = obj.$modelValue.id;

		//销售品政府补贴
		$scope.obj.govsubsidy_price = obj.$modelValue.govsubsidy_price;

		//更新出游时间
		$scope.section.start.date = null;
		$scope.obj.tour_date_type = obj.$modelValue.tour_date_type;

		if (obj.$modelValue.hasOwnProperty('id')) {
			info.get({ 'id': obj.$modelValue.id }, function (res) {

				if (res.errcode === 0) {
					$scope.obj.detail = res.data.detail;
				}
				else {
					$scope.show = false;
					alert(res.errmsg);
				}

			});
		}
	};


	//可用
	$scope.btnstate = true;

	$scope.gogo = function () {

		if ($scope.section.start.date != null) {
			$scope.order.tour_date = getDate($scope.section.start.date);
		}

		//-------------- 参数验证 -----------------------//
		if (!check()) return;
		//-------------- 参数验证 -----------------------//

		$scope.btnstate = false;

		var fun = createorder;

		if ($scope.sale_category === 'F11'
			|| $scope.sale_category === 'F14') {
			fun = createSubsidyOrder;
		}

		fun.save($scope.order, function (res) {

			if (res.errcode === 0) {
				alert('下单成功，请注意查收短信');
				$scope.order.name = '';
				$scope.order.cardno = '';
				$scope.order.mobile = '';
				$scope.order.num = 0;
				$scope.order.tour_date = '';

				$scope.searchform.mobile = '';
				$scope.userinfo = '';

				$scope.obj.id = '';
				$scope.obj.name = '';
				$scope.obj.sale_code = '';

				$scope.show = false;

				if ($scope.sale_category === 'F11'
					|| $scope.sale_category === 'F15') {
					checkgoodsbuy(0);
				}
			}
			else {
				alert(res.errmsg);
			}

			$scope.btnstate = true;

		});

	};


	$scope.jian = function () {
		if (isNaN($scope.order.num)) {
			$scope.order.num = 0;
			return;
		}
		$scope.order.num -= 1;
		if ($scope.order.num - 1 < 0) {
			$scope.order.num = 0;
		}
	};

	$scope.jia = function () {
		if (isNaN($scope.order.num)) {
			$scope.order.num = 0;
			return;
		}
		$scope.order.num += 1;
		if ($scope.order.num + 1 > $scope.obj.max) {
			$scope.order.num = $scope.obj.max;
		}
	};


	function check() {

		if ($scope.order.cardno == '') {
			if (!confirm("未填写身份证，要强制下单吗?")) {
				return false;
			}
		} else if (!IdentityCodeValid($scope.order.cardno)) {
			return false;
		}

		if ($scope.order.name == "") {
			alert("请填写姓名");
			return false;
		}

		if ($scope.order.mobile == "") {
			alert("请填写购电话");
			return false;
		}

		if (isNaN($scope.order.num)) {
			alert('购买数量请输入正确数字');
			$scope.order.num = 0;
			return false;
		}

		if ($scope.order.num == "0") {
			alert("请填写购票数量");
			return false;
		}

		if ($scope.obj.tour_date_type == '1' && $scope.order.tour_date == '') {
			alert("请填写出游时间，该票种只能在填写的出游时间使用。");
			return false;
		}


		//补贴销售品验证
		if ($scope.sale_category === 'F11') {

			var usergov = parseInt($scope.order.gov);
			var gov = parseInt($scope.obj.govsubsidy_price);

			var n = (usergov - (usergov % gov)) / gov;
			if ($scope.order.num > n) {
				alert('该用户这种商品最多只能购买' + n + '张');
				$scope.order.num = n;
				return false;
			}

		}


		return true;
	}



	// --------------- 卖补贴商品 --------------------------- //
	$scope.searchform = {};
	//$scope.searchform.mobile = '13840188285';
	$scope.search = function () {

		getuserinfobymobile.get($scope.searchform, function (res) {

			if (res.errcode === 0) {
				$scope.userinfo = '游客 : ' + res.data.username +
					' , 身份证 : ' + res.data.papersno +
					' , 可用政府补贴 : ' + res.data.generalsubsidy * 0.01 + '元';

				//政府补贴票
				if ($scope.sale_category === 'F11') {
					checkgoodsbuy(res.data.generalsubsidy);
				}
				//礼品票
				else if ($scope.sale_category === 'F15') {
					checkgift();
				}

				$scope.order.name = res.data.username;
				$scope.order.cardno = res.data.papersno;
				$scope.order.mobile = res.data.mobile;
				$scope.order.uid = res.data.userid;
				//政府补贴
				$scope.order.gov = res.data.generalsubsidy;
			}
			else {
				$scope.userinfo = '用户不存在';
			}

		});

	};



	//检查哪些销售品可以购买18640527880
	function checkgoodsbuy(gov) {

		if (!angular.isNumber(gov)) {
			alert('补贴值有误');
			return;
		}

		angular.forEach($scope.data, function (value, key) {
			var arr = $scope.data[key].nodes;
			for (var i = 0, j = arr.length; i < j; i++) {
				var tmp = arr[i];

				if (tmp.govsubsidy_price === -1) {
					tmp.unavailable = true;
				}
				else if (tmp.govsubsidy_price !== -1
					&& tmp.govsubsidy_price <= gov) {
					tmp.unavailable = false;
				}
				else if (tmp.govsubsidy_price !== -1
					&& tmp.govsubsidy_price > gov) {

					tmp.unavailable = true;
				}
			}
		});

	}

	// --------------- 卖补贴商品 --------------------------- //


	function checkgift() {
		angular.forEach($scope.data, function (value, key) {
			var arr = $scope.data[key].nodes;
			for (var i = 0, j = arr.length; i < j; i++) {
				arr[i].unavailable = false;
			}
		});
	}

	$scope.selectDate = function(){
		console.log($scope.saleobj)
		var modalInstance = $uibModal.open({
		    template: require('../views/sellPriceSetting.html'),
		    controller: 'sellPriceSetting',
		    size: 'lg',
		    resolve: {
		        items: function () {
		            return {
		                saleobj: $scope.saleobj
		            };
		        }
		    }
		});
		modalInstance.opened.then(function () {// 模态窗口打开之后执行的函数  
		});
		modalInstance.result.then(function (result) {
			$scope.section.start.date = new Date(result.date);
			$scope.product = result;
		}, function (reason) {
		});
	}

};