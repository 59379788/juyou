module.exports = function($scope, $uibModal, ticketinfo, cardinfo, cardproductorderlist, 
	ITEMS_PERPAGE, getDate, $state, $stateParams){

    $scope.searchform = {};
   // $scope.searchform.usetype = "1";

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();
 
    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
            start_time : getDate($scope.section.start.date) + " 00:00:00",
            end_time : getDate($scope.section.end.date) + " 23:59:59"
        };

        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        cardproductorderlist.save(para, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                $scope.objs = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };
    $scope.load();

    $scope.orderinfo = function(obj){

	    var modalInstance = $uibModal.open({
	      template: require('../views/cardorderinfo.html'),
	      controller: 'cardorderinfo',
	      size: 'lg',
	      resolve: {
	        obj : function(){
	            return obj;
	        }
	      }
		});
	}

    $scope.ticketinfo = function(code){

        var modalInstance = $uibModal.open({
          template: require('../views/ticketinfo.html'),
          controller: 'ticketinfo',
          size: 'xs',
          resolve: {
            code : function(){
                return code;
            },
            ticketinfo : function(){
                return ticketinfo;
            }
          }
        });

        modalInstance.result.then(function () {
          //load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

    };

    $scope.cardinfo = function(code){

        var modalInstance = $uibModal.open({
          template: require('../views/cardinfo.html'),
          controller: 'cardinfo',
          size: 'lg',
          resolve: {
            code : function(){
                return code;
            },
            cardinfo : function(){
                return cardinfo;
            }
          }
        });

        modalInstance.result.then(function () {
          //load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

    };

};