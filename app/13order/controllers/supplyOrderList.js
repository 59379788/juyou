module.exports = function ($scope, $state, supplyOrderList, getDate, toaster, 
	$uibModal, ticketlist, createBackOrder, resend, getRedCorridorOrderList,
    getRedCorridorResentMsg, getRedCorridorTrSendSms, orderbacklist, relay,
    getOrderSimInfo, agencyOrderRepeatECode, updateTicketEffectTime, str2date,
    getroyalocOrdersState) {


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
			start_time: getDate($scope.section.start.date) + " 00:00:00",
			end_time: getDate($scope.section.end.date) + " 23:59:59"
		};
		para = angular.extend($scope.searchform, para);
		supplyOrderList.save(para, function (res) {
			if (res.errcode === 0) {
				$scope.objs = res.data.results;
				$scope.bigTotalItems = res.data.totalRecord;
			}
			else {
				toaster.error({title: "提示", body:res.errmsg});
			}

		});

	};
	$scope.load();


    $scope.ticketlist = function(obj){

        //$state.go('app.orderticketlist', {'code' : code});

        var modalInstance = $uibModal.open({
          template: require('../views/orderticketlist.html'),
          controller: 'orderticketlist',
          size: 'lg',
          resolve: {
            obj : function(){
                return obj;
            },
            ticketlist : function(){
                return ticketlist;
            },
            createBackOrder : function(){
                return createBackOrder;
            },
            //红海滩
            getRedCorridorOrderList : function(){
                return getRedCorridorOrderList;
            },
            //退票历史
            orderbacklist : function(){
                return orderbacklist;
            },
            //北京票联  红海滩廊道
            getOrderSimInfo : function(){
                return getOrderSimInfo;
            },
            //修改生效时间
            updateTicketEffectTime : function(){
                return updateTicketEffectTime;
            },
            getDate : function(){
                return getDate;
            },
            str2date : function(){
                return str2date;
            },
            getroyalocOrdersState : function(){
                return getroyalocOrdersState;
            }
          }
        });

        modalInstance.result.then(function () {
          //load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

    };

	

    //打开模态框
    $scope.orderinfo = function(obj){

        var modalInstance = $uibModal.open({
          template: require('../views/orderinfo.html'),
          controller: 'orderinfo',
          size: 'lg',
          resolve: {
            obj : function(){
                return obj;
            }
          }
        });

        modalInstance.result.then(function () {
          //load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });
    }


    $scope.resend = function(obj){
        var fun;

        var para = {};
        if(obj.sale_belong === 'juyou' || obj.sale_belong.indexOf('supply_piaofutong') == 0 ||  obj.sale_belong.indexOf('supply_tstc') == 0  ||  obj.sale_belong === 'supply_tongchenglvyou' || obj.sale_belong === 'supply_zhiyoubao' || obj.sale_belong === 'supply_xiaojing' || obj.sale_belong === 'supply_ziwoyou')
        {
            fun = resend;
            para['code'] = obj.code;
        }
        else if(obj.sale_belong == 'langdao')
        {
            fun = getRedCorridorResentMsg;
            para['code'] = obj.code;
        }
        else if(obj.sale_belong == 'huaxiapiaolian')
        {
            fun = agencyOrderRepeatECode;
            para['order_code'] = obj.code;
            para['ownerMobile'] = obj.mobile;
        }

        console.log(para);
        fun.save(para, function(res){
            console.log(res);
            if(res.errcode === 0)
            {
                alert('发送成功');
            }
            else
            {
                alert(res.errmsg);
            }
        });
    }

    $scope.relay = function(obj){
        
    	var modalInstance = $uibModal.open({
          template: require('../views/relaymessage.html'),
          controller: 'relaymessage',
          size: 'xs',
          resolve: {
            code : function(){
                return obj.code;
            },
            relay : function(){
                return relay;
            },
            getRedCorridorTrSendSms : function(){
                return getRedCorridorTrSendSms;
            },
            sale_belong : function(){
                return obj.sale_belong;
            },
            agencyOrderRepeatECode : function(){
                return agencyOrderRepeatECode;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            
        });
    }

    $scope.back = function(obj){
        
    	var modalInstance = $uibModal.open({
          template: require('../views/backticket.html'),
          controller: 'backticket',
          size: 'xs',
          resolve: {
            code : function(){
                return obj.code;
            },
            num : function(){
                return obj.num;
            },
            createBackOrder : function(){
                return createBackOrder;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            
        });
    }


};