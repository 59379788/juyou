module.exports = function($scope, $stateParams, ITEMS_PERPAGE, getDate, $uibModal, usedorderlist,toaster){
    
    $scope.searchform = {};

    $scope.searchform.verification_code = $stateParams.code;

    

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
    //$scope.maxSize = 5;            //最多显示多少个按钮
    //$scope.bigCurrentPage = 1;      //当前页码
    //$scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {

    	$scope.total = {
	        'total' : 0
	    };
        
        var para = {
            //pageNo:$scope.bigCurrentPage, 
            //pageSize:$scope.itemsPerPage,
            start_time : getDate($scope.section.start.date) + " 00:00:00",
            end_time : getDate($scope.section.end.date) + " 23:59:59"
        };

        para = angular.extend($scope.searchform, para);
        
        usedorderlist.save(para, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
            	$scope.objs = res.data;
                //$scope.objs = res.data.results;
                //$scope.bigTotalItems = res.data.totalRecord;

                for(var i = 0, j = res.data.length; i < j; i++)
		        {
		            $scope.total.total += res.data[i].pay_price;
	            }
            }
            else
            {
                toaster.success({title:"",body:res.errmsg});
            }

        });

    };
    $scope.load();

    $scope.usedorderinfo = function(obj){
        
    	var modalInstance = $uibModal.open({
          template: require('../views/usedorderinfo.html'),
          controller: 'usedorderinfo',
          size: 'lg',
          resolve: {
            obj : function(){
                return obj;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            
        });
    }


};