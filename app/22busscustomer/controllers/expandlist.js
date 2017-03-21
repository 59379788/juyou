module.exports = function($scope, $state, $stateParams, $uibModal,findinfobyidlist,saverecord,ITEMS_PERPAGE){
		var activity_id = $stateParams.love_activity_id;
		/* 分页
			* ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.infolist = {
      'activity_id' : activity_id
    }

  	$scope.getlist = function(){
				var para = {
						pageNo:$scope.bigCurrentPage, 
						pageSize:$scope.itemsPerPage
				};
				para = angular.extend($scope.infolist, para);
				findinfobyidlist.save(para, function(res){
						console.log(para);
						if (res.errcode !== 0) {
								toaster.success({title:"",body : res.errmsg});
								return;
						}
						console.log(res);
						$scope.objs = res.data.results;
						$scope.bigTotalItems = res.data.totalRecord;
				});	
  	};
  	$scope.getlist();

  	$scope.info = {
  		'insert_user_name' : '',
  		'insert_user_mobile' : '',
  		'activity_id' : activity_id,
  		'objects_num' : '',
  		'sum_rmb' : '',
  		'remark' : ''
  	};
  	$scope.save = function(){
  		saverecord.save($scope.info, function(res){
        console.log($scope.info);
  			if (res.errcode !== 0) {
  				toaster.success({title:"",body:res.errmsg});
  				return;
  			}
  			console.log(res);
  			$scope.getlist();
  		});
  	};

};