module.exports = function($scope, $state, $stateParams, $uibModal,findPrizeList,savePrize,ITEMS_PERPAGE,updateDel,getPrize,updatePrize,salelist,toaster){   
    var id = $stateParams.id;// 活动id
    $scope.info = {
        'id' : id
    };
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    $scope.getlist = function () {
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
        };
        para = angular.extend($scope.info,para); 
        findPrizeList.save(para,function (res) {
            if (res.errcode != 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;
        });   
    };
    $scope.getlist();

    // 添加奖品
    $scope.add = function(id,prizeId){
        console.log('111');
        var modalInstance = $uibModal.open({
          template: require('../views/addprize.html'),
          controller: 'addprize',
          size: 'lg',
          resolve: {
            id : function(){
                return id;
            },
            savePrize : function(){
                return savePrize;
            },
            getPrize : function(){
                return getPrize;
            },
            prizeId : function(){
                return prizeId;
            },
            updatePrize : function(){
                return updatePrize;
            },
            salelist : function(){
                return salelist;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.getlist();         
        }, function () {
          //$scope.load();
        });
    };

    // 编辑奖品
    $scope.edit = function (prizeId) {
        var modalInstance = $uibModal.open({
          template: require('../views/addprize.html'),
          controller: 'addprize',
          size: 'lg',
          resolve: {
            prizeId : function(){
                return prizeId;
            },
            savePrize : function(){
                return savePrize;
            },
            getPrize : function(){
                return getPrize;
            },
            updatePrize : function(){
                return updatePrize;
            },
            salelist : function(){
                return salelist;
            }
          }
        });

        modalInstance.result.then(function () {
          $scope.getlist();
          
        }, function () {
          //$scope.load();
        });
    };

    // 删除奖品
    $scope.delete = function (prizeId) {
      if (confirm('确定删除该奖品吗？')) {
          updateDel.save({'id' : prizeId},function (res) {
            if (res.errcode != 0) {
              alert(res.errmsg);
              return;
            }
            console.log(res);
            $scope.getlist();
        })
      }
        
    };
};