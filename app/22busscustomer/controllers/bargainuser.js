module.exports = function($scope, $stateParams, $state, $uibModal, ITEMS_PERPAGE, findJoinUserList){
  var id = $stateParams.id;
  $scope.info = {
    'id' : id,
    'userName' : '',
    'mobile' : ''
  }


  /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

  $scope.search = function () {
    alert('查询');
    var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
      	};
      para = angular.extend($scope.info,para); 
    findJoinUserList.save(para, function (res) {
    	console.log(para);
    	if (res.errcode != 0) {
 				alert(res.errmsg);
 				return;
 			}
 			console.log(res);
 			$scope.objs = res.data.results;
 			$scope.bigTotalItems = res.data.totalRecord;
    });
  };

  
    

 	$scope.getlist = function () {
 		var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
      	};
      para = angular.extend({'id' : id},para); 
 		findJoinUserList.save(para, function (res) {
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
 	$scope.getlist();

};