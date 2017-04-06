module.exports = function ($scope, $state, salelist, ITEMS_PERPAGE, saleup, $window,
	saledown, saleupdate, $uibModal, viewlist, salecreate, saleinfo, saleupdate, goodlist,
	saledetailcreate, saledetaillist, saledetaildelete, dictbytypelist, FileUploader,
	salegovsubsidycreate, salegovsubsidyupdate, salegovsubsidyinfo, salecategorylist,
	salejuyousubsidycreate, salejuyousubsidyupdate, salejuyousubsidyinfo, talist,
	sellerList, tstcreate, tststart, tststop,
	sellerListno, tstcreateno, tststartno, tststopno, saveSaleInteral, findsaleintegrallist, findSaleFenRun, saveSaleFenRun,
	//系统确认模块
	affirmcreate, affirminfo, affirmupdate,
	//短信模版
	smstmplist,
	//限时购模块
	flashsalecreate, flashsaleinfo, flashsaleupdate,
	getDate, str2date, date2str, attrlistsel
) {


	$scope.searchform = {};

	// $scope.create = function(){

	// 	var modalInstance = $uibModal.open({
	//          template: require('../views/tktsalemodel.html'),
	//          controller: 'tktsalecreate',
	//          size: 'lg',
	//          resolve: {
	//            salecreate : function(){
	//                return salecreate;
	//            },
	//            viewlist : function(){
	//                return viewlist;
	//            },
	//            saleinfo : function(){
	//                return saleinfo;
	//            },
	//            saleupdate : function(){
	//                return saleupdate;
	//            },
	//            goodlist : function(){
	//                return goodlist;
	//            },
	//            saledetailcreate : function(){
	//                return saledetailcreate;
	//            },
	//            saledetaillist : function(){
	//                return saledetaillist;
	//            },
	//            saledetaildelete : function(){
	//                return saledetaildelete;
	//            },
	//            saveSaleInteral : function(){
	//                return saveSaleInteral;
	//            },
	//            findsaleintegrallist : function(){
	//                return findsaleintegrallist;
	//            },
	//            findSaleFenRun : function(){
	//                return findSaleFenRun;
	//            },
	//            saveSaleFenRun : function(){
	//                return saveSaleFenRun;
	//            },
	//            //政府补贴
	//            salegovsubsidycreate : function(){
	//                return salegovsubsidycreate;
	//            },
	//            salegovsubsidyupdate : function(){
	//                return salegovsubsidyupdate;
	//            },
	//            salegovsubsidyinfo : function(){
	//                return salegovsubsidyinfo;
	//            },
	//            //居游补贴
	//            salejuyousubsidycreate : function(){
	//                return salejuyousubsidycreate;
	//            },
	//            salejuyousubsidyupdate : function(){
	//                return salejuyousubsidyupdate;
	//            },
	//            salejuyousubsidyinfo : function(){
	//                return salejuyousubsidyinfo;
	//            },
	//            //销售品类型查询功能模块
	//            salecategorylist : function(){
	//                return salecategorylist;
	//            },
	//            dictbytypelist : function(){
	//                return dictbytypelist;
	//            },
	//            //系统确认模块
	//            affirmcreate : function(){
	//                return affirmcreate;
	//            },
	//            affirminfo : function(){
	//                return affirminfo;
	//            }, 
	//            affirmupdate : function(){
	//                return affirmupdate;
	//            },
	//            smstmplist : function(){
	//                return smstmplist;
	//            },
	//            flashsalecreate : function(){
	//                return flashsalecreate;
	//            },
	//            flashsaleinfo : function(){
	//                return flashsaleinfo;
	//            },
	//            flashsaleupdate : function(){
	//                return flashsaleupdate;
	//            },
	//            getDate : function(){
	//                return getDate;
	//            },
	//            str2date : function(){
	//                return str2date;
	//            },
	//            date2str : function(){
	//                return date2str;
	//            },
	//            attrlistsel : function(){
	//                return attrlistsel;
	//            }
	//          }
	//        });

	//        modalInstance.result.then(function () {
	//          //load();
	//        }, function () {
	//          //$log.info('Modal dismissed at: ' + new Date());
	//        });

	// };

	$scope.create = function () {

		$state.go('app.newproduct');
	};


	$scope.load = function () {
		console.log('$scope.searchform = ' + $scope.searchform);
		console.log($scope.searchform);
		salelist.save($scope.searchform, function (res) {

            /* 销售品存储结构
             * ========================================= */
			var view = new Object();
			var resview = new Array();

			var viewindex = new Array();

			console.log(res);

			if (res.errcode !== 0) {
				alert("数据获取失败");
				return;
			}

			//用景区编号作为存储结构的属性，值是数组
			for (var i = 0, j = res.data.length; i < j; i++) {
				var tt = res.data[i];
				var v = tt.place_code;
				var sale_category = tt.sale_category;
				var state = tt.state;

				//第一层
				if (!view.hasOwnProperty(v)) {
					view[v] = new Object();
					view[v].viewname = tt.place_name;
					view[v].viewcode = tt.place_code;
					viewindex.push(v);
				}

				//第二层（state，上架，下架，草稿）
				if (!view[v].hasOwnProperty('state')) {
					view[v]['state'] = new Object();
				}
				if (!view[v]['state'].hasOwnProperty(state)) {
					view[v]['state'][state] = new Object();
					view[v]['state'][state].title = tt.state_name;
					if (tt.state == 1) {
						view[v]['state'][state].active = true;
					}
					else {
						view[v]['state'][state].active = false;
					}
				}

				//第三层（sale_category,旅游局补贴－app，旅游局补贴－分销)
				if (!view[v]['state'][state].hasOwnProperty('category')) {
					view[v]['state'][state]['category'] = new Object();
				}
				if (!view[v]['state'][state]['category'].hasOwnProperty(sale_category)) {
					view[v]['state'][state]['category'][sale_category] = new Object();
					view[v]['state'][state]['category'][sale_category].salearr = new Array();
					view[v]['state'][state]['category'][sale_category].title = tt.sale_category_name;
				}

				view[v]['state'][state]['category'][sale_category].salearr.push(tt);
			}

			console.log(view);

			for (var key in view) {
				var o = view[key];
				resview.push(o);
			}


			console.log("------------");
			console.log(resview);
			console.log("------------");

			$scope.objs = resview;

		});

	};
	$scope.load();

	dictbytypelist({ 'type': 'sale_category' }).then(function (res) {
		if (res.errcode === 0) {
			$scope.typearr = res.data;
		}
		else {
			alert(res.errmsg);
		}
	});

	$scope.start = function (id) {
		if(confirm('是否确定上架?')){
			saleup.get({ 'id': id }, function (res) {
				console.log(res);
				if (res.errcode === 0) {
					$scope.load();
				} else {
					alert(res.errmsg);
				}
			});
		}
		
	}

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


	// $scope.edit = function(id){

	// 	//$state.go('app.editsale', {'id' : id});

	//     var modalInstance = $uibModal.open({
	//       template: require('../views/tktsalemodel.html'),
	//       controller: 'tktsaleupdate',
	//       size: 'lg',
	//       resolve: {
	//         id : function(){
	//             return id;
	//         },
	//         what : function(){
	//             return 'edit';
	//         },
	//         viewlist : function(){
	//             return viewlist;
	//         },
	//         saleinfo : function(){
	//             return saleinfo;
	//         },
	//         saleupdate : function(){
	//             return saleupdate;
	//         },
	//         goodlist : function(){
	//             return goodlist;
	//         },
	//         saledetailcreate : function(){
	//             return saledetailcreate;
	//         },
	//         saledetaillist : function(){
	//             return saledetaillist;
	//         },
	//         saledetaildelete : function(){
	//             return saledetaildelete;
	//         },
	//         saveSaleInteral : function(){
	//             return saveSaleInteral;
	//         },
	//         findsaleintegrallist : function(){
	//             return findsaleintegrallist;
	//         },
	//         findSaleFenRun : function(){
	//             return findSaleFenRun;
	//         },
	//         saveSaleFenRun : function(){
	//             return saveSaleFenRun;
	//         },
	//         //政府补贴
	//         salegovsubsidycreate : function(){
	//             return salegovsubsidycreate;
	//         },
	//         salegovsubsidyupdate : function(){
	//             return salegovsubsidyupdate;
	//         },
	//         salegovsubsidyinfo : function(){
	//             return salegovsubsidyinfo;
	//         },
	//         //居游补贴
	//         salejuyousubsidycreate : function(){
	//             return salejuyousubsidycreate;
	//         },
	//         salejuyousubsidyupdate : function(){
	//             return salejuyousubsidyupdate;
	//         },
	//         salejuyousubsidyinfo : function(){
	//             return salejuyousubsidyinfo;
	//         },
	//         //销售品类型查询功能模块
	//         salecategorylist : function(){
	//             return salecategorylist;
	//         },
	//         dictbytypelist : function(){
	//             return dictbytypelist;
	//         },
	//         //系统确认模块
	//         affirmcreate : function(){
	//             return affirmcreate;
	//         },
	//         affirminfo : function(){
	//             return affirminfo;
	//         }, 
	//         affirmupdate : function(){
	//             return affirmupdate;
	//         },
	//         smstmplist : function(){
	//             return smstmplist;
	//         },
	//         flashsalecreate : function(){
	//             return flashsalecreate;
	//         },
	//         flashsaleinfo : function(){
	//             return flashsaleinfo;
	//         },
	//         flashsaleupdate : function(){
	//             return flashsaleupdate;
	//         },
	//         getDate : function(){
	//             return getDate;
	//         },
	//         str2date : function(){
	//             return str2date;
	//         },
	//         date2str : function(){
	//             return date2str;
	//         },
	//         attrlistsel : function(){
	//             return attrlistsel;
	//         }
	//       }
	//     });

	//     modalInstance.result.then(function () {
	//       //$scope.load();
	//     }, function () {
	//         $scope.load();
	//       //$log.info('Modal dismissed at: ' + new Date());
	//     });

	// };

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
					return getDate;
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


	// $scope.info = function(id){

	//     //$state.go('app.editsale', {'id' : id, 'type' : 'info'});

	//     var modalInstance = $uibModal.open({
	//       template: require('../views/tktsalemodel.html'),
	//       controller: 'tktsaleupdate',
	//       size: 'lg',
	//       resolve: {
	//         id : function(){
	//             return id;
	//         },
	//         what : function(){
	//             return 'info';
	//         },
	//         viewlist : function(){
	//             return viewlist;
	//         },
	//         saleinfo : function(){
	//             return saleinfo;
	//         },
	//         saleupdate : function(){
	//             return saleupdate;
	//         },
	//         goodlist : function(){
	//             return goodlist;
	//         },
	//         saledetailcreate : function(){
	//             return saledetailcreate;
	//         },
	//         saledetaillist : function(){
	//             return saledetaillist;
	//         },
	//         saledetaildelete : function(){
	//             return saledetaildelete;
	//         },
	//         saveSaleInteral : function(){
	//             return saveSaleInteral;
	//         },
	//         findsaleintegrallist : function(){
	//             return findsaleintegrallist;
	//         },
	//          findSaleFenRun : function(){
	//             return findSaleFenRun;
	//         },
	//         saveSaleFenRun : function(){
	//             return saveSaleFenRun;
	//         },
	//         //政府补贴
	//         salegovsubsidycreate : function(){
	//             return salegovsubsidycreate;
	//         },
	//         salegovsubsidyupdate : function(){
	//             return salegovsubsidyupdate;
	//         },
	//         salegovsubsidyinfo : function(){
	//             return salegovsubsidyinfo;
	//         },
	//         //居游补贴
	//         salejuyousubsidycreate : function(){
	//             return salejuyousubsidycreate;
	//         },
	//         salejuyousubsidyupdate : function(){
	//             return salejuyousubsidyupdate;
	//         },
	//         salejuyousubsidyinfo : function(){
	//             return salejuyousubsidyinfo;
	//         },
	//         //销售品类型查询功能模块
	//         salecategorylist : function(){
	//             return salecategorylist;
	//         },
	//         dictbytypelist : function(){
	//             return dictbytypelist;
	//         },
	//         //系统确认模块
	//         affirmcreate : function(){
	//             return affirmcreate;
	//         },
	//         affirminfo : function(){
	//             return affirminfo;
	//         }, 
	//         affirmupdate : function(){
	//             return affirmupdate;
	//         },
	//         smstmplist : function(){
	//             return smstmplist;
	//         },
	//         flashsalecreate : function(){
	//             return flashsalecreate;
	//         },
	//         flashsaleinfo : function(){
	//             return flashsaleinfo;
	//         },
	//         flashsaleupdate : function(){
	//             return flashsaleupdate;
	//         },
	//         getDate : function(){
	//             return getDate;
	//         },
	//         str2date : function(){
	//             return str2date;
	//         },
	//         date2str : function(){
	//             return date2str;
	//         },
	//         attrlistsel : function(){
	//             return attrlistsel;
	//         },
	//         findSaleFenRun : function(){
	//             return findSaleFenRun;
	//         },
	//         saveSaleFenRun : function(){
	//             return saveSaleFenRun;
	//         },
	//       }
	//     });

	//     modalInstance.result.then(function () {
	//       //load();
	//     }, function () {
	//       //$log.info('Modal dismissed at: ' + new Date());
	//     });

	// };

	$scope.info = function (id) {

		//$state.go('app.editsale', {'id' : id, 'type' : 'info'});

		var modalInstance = $uibModal.open({
			template: require('../views/productInfo.html'),
			controller: 'productInfo',
			url: '/productInfo/:id',
			size: 'lg',
			resolve: {
				'productid': function () {
					return id;
				},
				str2date: function () {
					return str2date;
				},
				date2str: function () {
					return getDate;
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


	talist().then(function (res) {
		if (res.errcode === 0) {
			$scope.taarr = res.data;
		}
		else {
			alert(res.errmsg);
		}
	});

};