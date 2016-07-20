module.exports = function($scope, ITEMS_PERPAGE, $uibModal, createBackOrder,
	selectapplyOrderRefundByUserlist, updateOrderRefundAgree, updateOrderRefundNotAgree){

	$scope.searchform = {};

	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

        para = angular.extend($scope.searchform, para);
        
        selectapplyOrderRefundByUserlist.save(para, function(res){

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

    $scope.examine = function(obj){

        var modalInstance = $uibModal.open({
          template: require('../docking/qunaexamineback.html'),
          controller: 'qunaexamineback',
          size: 'xs',
          resolve: {
            partnerorderid : function(){
                return obj.partnerorderid;
            },
            refundseq : function(){
                return obj.refundseq;
            },
            refundquantity : function(){
                return obj.refundquantity;
            },
            createBackOrder : function(){
                return createBackOrder;
            },
            updateOrderRefundAgree : function(){
                return updateOrderRefundAgree;
            },
            updateOrderRefundNotAgree : function(){
                return updateOrderRefundNotAgree;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
        	
        });

    };

    $scope.info = function(obj){

        var modalInstance = $uibModal.open({
          template: require('../docking/qunabackticketapplyinfo.html'),
          controller: 'qunabackticketapplyinfo',
          size: 'xs',
          resolve: {
            refundreason : function(){
                return obj.refundreason;
            },
            refundexplain : function(){
                return obj.refundexplain;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
        	
        });

    };

    
};