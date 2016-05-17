module.exports = function($scope, $state, list, ITEMS_PERPAGE, talist,
 $uibModal, recharge, trackinfo){

	$scope.searchform = {};

    talist().then(function(res) {
        console.log(res);
          if(res.errcode === 0)
          {
            $scope.taarr = res.data;
            //$scope.searchform.seller_code=$scope.taarr[0].CODE;
          }
          else
          {
              alert(res.errmsg);
          }
      });


	$scope.create = function(){

		$state.go('app.createdeposit');
	};

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
        
        list.save(para, function(res){

         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert(res.errmsg);
         		return;
         	}

         	$scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

        });

    };
    $scope.load();

    //打开模态框
    $scope.recharge = function(obj){

        var modalInstance = $uibModal.open({
          template: require('../views/recharge.html'),
          controller: 'recharge',
          //size: 'lg',
          resolve: {
            obj : function(){
                return obj;
            },
            recharge : function(){
                return recharge;
            }
          }
        });

        modalInstance.result.then(function () {
          $scope.load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });
    }



    $scope.trackinfo = function(obj){

        // var modalInstance = $uibModal.open({
        //   template: require('../views/trackinfo.html'),
        //   controller: 'trackinfo',
        //   size: 'lg',
        //   resolve: {
        //     obj : function(){
        //         return obj;
        //     },
        //     trackinfo : function(){
        //         return trackinfo;
        //     }
        //   }
        // });

        // modalInstance.result.then(function () {
        //   //$scope.load();
        // }, function () {
        //   //$log.info('Modal dismissed at: ' + new Date());
        // });

        $state.go('app.trackinfo');
    }


    $scope.info = function(obj){




    };

    
};