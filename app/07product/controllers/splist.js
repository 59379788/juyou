module.exports = function ($scope, $state, $resource, ITEMS_PERPAGE, $uibModal, str2date, date2str,
	saleup, saledown, saleupdate, talist, sellerListno, tstcreateno, tststartno, tststopno, toaster

) {

	$scope.searchform = {};

	$scope.create = function () {
		$state.go('app.newproduct');
	};

    /* 分页
     * ========================================= */
	$scope.maxSize = 5;            //最多显示多少个按钮
	$scope.bigCurrentPage = 1;      //当前页码
	$scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

	$scope.load = function () {

		var para = {
			pageNo: $scope.bigCurrentPage,
			pageSize: $scope.itemsPerPage
		};

		para = angular.extend($scope.searchform, para);

		$resource('/api/ac/tc/ticketSaleService/getSaleList', {}, {})
			.save(para, function (res) {

				console.log(res);
				if (res.errcode !== 0) {
					toaster.error({ title: "提示", body: res.errmsg });
					return;
				}

				$scope.objs = res.data.results;
				for (var index = 0; index < $scope.objs.length; index++) {
					switch ($scope.objs[index].sale_apply_state) {
						case 'new':
							$scope.objs[index].sale_apply_state_name = '';
							break;
						case 'apply_sale':
							$scope.objs[index].sale_apply_state_name = '申请上架';
							break;
						case 'wait_sale':
							$scope.objs[index].sale_apply_state_name = '审核通过等待上架';
							break;
						case 'for_sale':
							$scope.objs[index].sale_apply_state_name = '销售中';
							break;
						case 'pause':
							$scope.objs[index].sale_apply_state_name = '暂停销售';
							break;
						case 'sale_end':
							$scope.objs[index].sale_apply_state_name = '下架';
							break;
						case 'ban_sale':
							$scope.objs[index].sale_apply_state_name = '禁止销售';
							break;

						default:
							$scope.objs[index].sale_apply_state_name = '';
							break;
					}
				}
				$scope.bigTotalItems = res.data.totalRecord;

			});

	};
	$scope.load();

	//申请上架
	$scope.start = function (id) {
		saleup.get({ 'id': id }, function (res) {
			console.log(res);
			if (res.errcode === 0) {
				$scope.load();
			} else {
				alert(res.errmsg);
			}
		});
	}

	//下架
	$scope.stop = function (id) {
		saledown.get({ 'id': id }, function (res) {
			console.log(res);
			if (res.errcode === 0) {
				$scope.load();
			} else {
				alert(res.errmsg);
			}
		});
	}

	$scope.edit = function (id) {

		//$state.go('app.editsale', {'id' : id});

		var modalInstance = $uibModal.open({
			template: require('../views/product.html'),
			controller: 'newproduct',
			url: '/product/edit/:id',
			size: 'lg',
			resolve: {
				'productid': function () {
					return id;
				},
				what: function () {
					return 'edit';
				},
				str2date: function () {
					return str2date;
				},
				date2str: function () {
					return date2str;
				},
				auditing: function () {
					return false;
				}
			}
		});

		modalInstance.opened.then(function () {// 模态窗口打开之后执行的函数  
            // $scope.load();
        });
        modalInstance.result.then(function (showResult) {
            $scope.load();
        }, function (reason) {
			$scope.load();
            // // click，点击取消，则会暑促cancel  
            // $log.info('Modal dismissed at: ' + new Date());
        });
	};


	$scope.asort = function (id, asort) {
		console.log({ 'id': id, 'asort': asort });
		saleupdate.save({ 'id': id, 'asort': asort }, function (res) {
			console.log(res);
			if (res.errcode === 0) {
				$scope.load();
			}
			else {
				alert(res.errmsg);
			}
		});
	};


	$scope.info = function (id) {

		//$state.go('app.editsale', {'id' : id, 'type' : 'info'});

		var modalInstance = $uibModal.open({
			template: require('../views/product.html'),
			controller: 'newproduct',
			url: '/product/edit/:id',
			size: 'lg',
			resolve: {
				'productid': function () {
					return id;
				},
				what: function () {
					return 'info';
				},
				str2date: function () {
					return str2date;
				},
				date2str: function () {
					return date2str;
				},
				auditing: function () {
					return false;
				}

			}
		});

		modalInstance.result.then(function () {
			//load();
		}, function () {
			//$log.info('Modal dismissed at: ' + new Date());
		});

	};



	//flag:1,分配经销商
	//flga:0,不允许销售
	$scope.distribution = function (code, flag) {

		var modalInstance;

		if (flag == 1) {
			modalInstance = $uibModal.open({
				template: require('../views/distribution.html'),
				controller: 'distribution',
				//size: 'lg',
				resolve: {
					code: function () {
						return code;
					},
					talist: function () {
						return talist;
					},
					sellerList: function () {
						return sellerList;
					},
					tstcreate: function () {
						return tstcreate;
					},
					tststart: function () {
						return tststart;
					},
					tststop: function () {
						return tststop;
					},
					title: function () {
						return '分配经销商';
					}
				}
			});
		}
		else if (flag == 0) {
			modalInstance = $uibModal.open({
				template: require('../views/distribution.html'),
				controller: 'distribution',
				//size: 'lg',
				resolve: {
					code: function () {
						return code;
					},
					talist: function () {
						return talist;
					},
					sellerList: function () {
						return sellerListno;
					},
					tstcreate: function () {
						return tstcreateno;
					},
					tststart: function () {
						return tststartno;
					},
					tststop: function () {
						return tststopno;
					},
					title: function () {
						return '分配不允许销售经销商';
					}
				}
			});
		}


		modalInstance.opened.then(function () {// 模态窗口打开之后执行的函数  
            // $scope.load();
        });
        modalInstance.result.then(function (showResult) {
            $scope.load();
        }, function (reason) {
			$scope.load();
            // // click，点击取消，则会暑促cancel  
            // $log.info('Modal dismissed at: ' + new Date());
        });

	};

	$scope.del = function (id) {

		if (confirm("您确认要删除吗？")) {

			saleupdate.save({ 'id': id, 'del_flg': '1' }, function (res) {

				console.log(res);

				if (res.errcode === 0) {
					alert("删除成功");
					$scope.load();
				}
				else {
					alert(res.errmsg);
				}

			});

		}
	};

};