module.exports = function($scope, $state, grouplist, ITEMS_PERPAGE, getDate, update, groupdetail){

   	$scope.searchform = {};

	$scope.section = {};
	$scope.section.start = {};
	$scope.section.start.date = {};

	$scope.today = function() {
		$scope.section.start.date = new Date();
	};
	$scope.today();

	$scope.open = function(obj) {
		obj.opened = true;
	};

	$scope.create = function(id){

    	$state.go('app.createsellinggroup');

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
            arrival_date : getDate($scope.section.start.date)
        };
        
        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        grouplist.save(para, function(res){

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

    };
    $scope.load();

    $scope.del = function (code) {
    	if (confirm("确定要删除吗?")) {
		    update.get({'code' : code, 'del_flg' : '1'}, function(res){

		        if(res.errcode === 0)
				{
					$scope.load();
				}
				else
				{
					alert(res.errmsg);
				}

		    });
	    }
    };

    $scope.edit = function (code) {
    	$state.go('app.editsellinggroup', {'code' : code});
    };

    $scope.detail = function(code){
        $state.go('app.sellingdetail', {'code' : code});
    }




};
