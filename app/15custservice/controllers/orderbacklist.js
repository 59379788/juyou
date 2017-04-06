module.exports = function($scope, $state, orderbacklist, orderback, ITEMS_PERPAGE, 
    $uibModal, dictbytypelist){

	$scope.searchform = {
        // 'from_app_id' : ''
    };
    $scope.payment_typearr = [];
    $scope.back_statearr = [];
    $scope.ticket_statearr = [];



	/* 分页
     * ========================================= */
    $scope.maxSize = 10;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {

    	var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

        para = angular.extend(para, $scope.searchform);
        console.log('入参');
        console.log(para);
        
        orderbacklist.save(para, function(res){

         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	$scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

        });

    };
    $scope.load();

	$scope.back = function(obj){
		var modalInstance = $uibModal.open({
	          template: require('../user/orderback.html'),
	          controller: 'orderback',
	          size: 'xs',
	          resolve: {
	            id : function(){
	                return obj.id;
	            },
	            back_price : function(){
	                return obj.back_price;
	            },
	            orderback : function(){
	                return orderback;
	            }
	          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            
        });
	}




    dictbytypelist({'type' : 'ticket_payment_type'}).then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
            $scope.payment_typearr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    dictbytypelist({'type' : 'ticket_back_pay_state'}).then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
            $scope.back_statearr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    dictbytypelist({'type' : 'ticket_back_ticket_state'}).then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
            $scope.ticket_statearr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

};