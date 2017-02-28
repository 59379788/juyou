module.exports = function($scope, $state, $stateParams, $uibModal,findWinPrizeUserList,getWinPrizeUser,ITEMS_PERPAGE){
  var id = $stateParams.id;
  $scope.info = {
    'id' : id
  };
  $scope.searchform = {
    'id' : id,
    'userName' : '',
    'mobile' : ''
  }
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
    findWinPrizeUserList.save(para,function (res) {
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

  $scope.search = function () {
    var para = {
        pageNo:$scope.bigCurrentPage, 
        pageSize:$scope.itemsPerPage,
    };
    para = angular.extend($scope.searchform,para); 
    getWinPrizeUser.save(para,function(res) {
      console.log(para);
      if (res.errcode != 0) {
        alert(res.errmsg);
        return;
      }
      console.log(res);
      $scope.objs = res.data.results;
      $scope.bigTotalItems = res.data.totalRecord;
    })
  };
  

};