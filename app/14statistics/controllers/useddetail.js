module.exports = function($scope, view, start_time, end_time, useddetaillist, grouplxslist, $uibModalInstance, ITEMS_PERPAGE, goods_code){

	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    

    $scope.load = function () {

    	var para = {
			pageNo:$scope.bigCurrentPage, 
	        pageSize:$scope.itemsPerPage,
			view : view,
			goods_code : goods_code,
			start_time : start_time,
			end_time : end_time
		};

		useddetaillist.save(para, function(res){
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
	}
	$scope.load();

	var paracount = {
			view : view,
			goods_code : goods_code,
			start_time : start_time,
			end_time : end_time
		};
		
	grouplxslist.get(paracount, function(res){
		if(res.errcode === 0)
		{
			$scope.objscount = res.data;
			
		}
		else
		{
			alert(res.errmsg);
		}
	});
	

	$scope.cancel = function () {
		$uibModalInstance.close();
	};

};
