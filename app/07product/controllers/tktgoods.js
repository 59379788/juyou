module.exports = function($scope, $state, goodslist, goodsupdate, ITEMS_PERPAGE){

	$scope.searchform = {};


	$scope.create = function(){

		$state.go('app.creategoods');
		
	};

	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

        para = angular.extend($scope.searchform, para);
        
        goodslist.save(para, function(res){

         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	$scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

        });

    };
    $scope.load();

    $scope.start = function(id) {
		goodsupdate.get({'id' : id, 'state' : '0'}, function(res){
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}

	$scope.stop = function(id) {
		goodsupdate.get({'id' : id, 'state' : '1'}, function(res){
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}


    $scope.edit = function(id){

    	$state.go('app.editgoods', {'id' : id});

    };


};