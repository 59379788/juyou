module.exports = function($scope, $state, $stateParams, $uibModal,findinfobyidlist,saverecord,ITEMS_PERPAGE){
	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

  	$scope.getlist = function(){
  		var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
  		findinfobyidlist.save(para, function(res){
  			if (res.errcode !== 0) {
  				alert(res.errmsg);
  				return;
  			}
  			console.log(res);
  			$scope.ojs = res.data.results;
  			$scope.bigTotalItems = res.data.totalRecord;
  		});	
  	};
  	$scope.getlist();

  	$scope.info = {
  		'insert_user_name' : '',
  		'insert_user_mobile' : '',
  		'activity_id' : '',
  		'objects_num' : '',
  		'sum_rmb' : '',
  		'remark' : ''
  	};
  	$scope.save = function(){
  		saverecord.save($scope.info, function(res){
  			if (res.errcode !== 0) {
  				alert(res.errmsg);
  				return;
  			}
  			console.log(res);
  			$scope.getlist();
  		});
  	};

};