module.exports = function($scope, $stateParams, $state, $uibModal, ITEMS_PERPAGE, findManageActiveList, getDate, findCheckActiveList){
  /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();
 
    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };


  $scope.createactivity = function () {
    $state.go('app.creatbargain');
  };
  	$scope.info = {
  		'title' : '',
  		'startTime' : '',
  		'endTime' : ''

  	}
  $scope.search = function () {
    alert('查询');
    var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
            startTime : getDate($scope.section.start.date) + " 00:00:00",
            endTime : getDate($scope.section.end.date) + " 23:59:59"
      	};
      para = angular.extend($scope.info,para); 
    findCheckActiveList.save(para, function (res) {
    	console.log(para);
    	if (res.errcode != 0) {
 				alert(res.errmsg);
 				return;
 			}
 			console.log(res);
 			$scope.objs = res.data.results;
 			$scope.bigTotalItems = res.data.totalRecord;
    });
    //$state.go('app.prizelist');
  };

  
    

 	$scope.getlist = function () {
 		var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
      	};
      para = angular.extend(para); 
 		findManageActiveList.save(para, function (res) {
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

 	$scope.seeprizelist = function (id) {
 		$state.go('app.prizelist',{'id' : id});
 	};
 	$scope.edit = function (id) {
 		$state.go('app.creatbargain',{'id' : id});
 	};
 	$scope.seepbargainuser = function (id) {
 		$state.go('app.bargainuser',{'id' : id});
 	};
 	$scope.seewinuser = function (id) {
 		$state.go('app.winuser',{'id' : id});
 	};


};