module.exports = function($scope, $state, list, viewupdate, ITEMS_PERPAGE){

	$scope.searchform = {};


	$scope.create = function(){

		$state.go('app.newStore');
	};

	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage,
            pageSize:$scope.itemsPerPage,
            'type' : 'S',
        };

        para = angular.extend($scope.searchform, para);
        
        list.save(para, function(res){
            console.log(para);
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

    $scope.type = function(id){
    	$state.go('app.tkttype', {'placeid' : id});
    };


    $scope.createtkttype = function(id){
        $state.go('app.tkttypecreate', {'placeid' : id});
    }

    $scope.device = function(code){
        $state.go('app.devicelist', {'placecode' : code});
    }

    
};