module.exports = function($scope, $state, list, ITEMS_PERPAGE, getDate, $uibModal){

    $scope.searchform = {};

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

        console.log(getDate($scope.section.start.date));
        console.log(getDate($scope.section.end.date));
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
            start_time : getDate($scope.section.start.date) + " 00:00:00",
            end_time : getDate($scope.section.end.date) + " 23:59:59"
        };

        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        list.save(para, function(res){

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


    $scope.ticketlist = function(code){

        $state.go('app.orderticketlist', {'code' : code});
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
            // device_code : function(){
            //     return device_code;
            // },
            // typelist : function(){
            //     return typelist;
            // },
            // add : function(){
            //     return add;
            // },
            // del : function(){
            //     return del;
            // }
          }
        });


        // var modalInstance = $uibModal.open({
        //   template: require('../views/orderinfo.html'),
        //   //controller: 'orderinfo',
        //   resolve: {
        //     obj : function(){
        //         return obj;
        //     }
        //   }
        // });

        modalInstance.result.then(function () {
          //load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });
    }


   

};