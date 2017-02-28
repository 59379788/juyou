module.exports = function($scope, $state, $stateParams, $uibModal,findPrizeList,savePrize,ITEMS_PERPAGE,updateDel){
  var id = $stateParams.id;
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
  $scope.add = function(id){

        var modalInstance = $uibModal.open({
          template: require('../views/addprize.html'),
          controller: 'addprize',
          size: 'lg',
          resolve: {
            id : function(){
                return id;
            },
            // what : function(){
            //     return 'info';
            // },
            savePrize : function(){
                return savePrize;
            }
            // businesslist : function(){
            //     return businesslist;
            // },
            // typelist : function(){
            //     return typelist;
            // },
            // getDate : function(){
            //     return getDate;
            // }
          }
        });

        modalInstance.result.then(function () {
          
        }, function () {
          //$scope.load();
        });

  };

  $scope.edit = function (id) {
    $state.go('app.addprize');
  };
  $scope.delete = function (id) {
    updateDel.save({'id' : id},function (res) {
      if (res.errcode != 0) {
        alert(res.errmsg);
        return;
      }
      console.log(res);
    })
  };
};