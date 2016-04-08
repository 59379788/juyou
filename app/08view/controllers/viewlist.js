module.exports = function($scope, $state, list, viewupdate){

	$scope.searchform = {};


	$scope.create = function(){

		$state.go('app.createview');
	};

	/* 分页
     * ========================================= */
    // $scope.maxSize = 5;             //最多显示多少个按钮
    // $scope.bigCurrentPage = 2;      //当前页码
    // $scope.itemsPerPage = 2;         //每页显示几条


	//$scope.totalItems = 64;
	//$scope.currentPage = 4;
	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
    
    $scope.load = function () {


    	alert('aaaaa');
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

        para = angular.extend($scope.searchform, para);
        
        list.save(para, function(res){

         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	$scope.objs = res.data.results;
         	//alert(res.data.totalRecord);
            $scope.bigTotalItems = res.data.totalRecord;

        });

    };
    $scope.load();


    $scope.edit = function(id){

    	$state.go('app.editview', {'placeid' : id});

    };


    $scope.asort = function(id, asort){

    	console.log({'place_id' : id, 'asort' : asort});
    	viewupdate.save({'place_id' : id, 'asort' : asort}, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$scope.load();
			}
			else
			{
				alert(res.errmsg);
			}

		});

    };

};