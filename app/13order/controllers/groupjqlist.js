module.exports = function($scope, grouporderlist, ITEMS_PERPAGE, $uibModal, getDate, infolist){

    $scope.searchform = {};

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();

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
            arrival_date : getDate($scope.section.start.date),
            del_flg : 0,
            outstate : 1
        };
        
        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        grouporderlist.save(para, function(res){

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

    $scope.info = function (code) {
        var modalInstance = $uibModal.open({
          template: require('../views/grouplistinfo.html'),
          controller: 'grouplistinfo',
          size: 'lg',
          resolve: {
            code : function(){
                return code;
            },
            infolist : function(){
                return infolist;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            //$scope.load();
          //$log.info('Modal dismissed at: ' + new Date());
        });


    	//$state.go('app.infosellinggroup', {'code' : code});
    };

    $scope.print = function () {
    	window.print();
    }

};