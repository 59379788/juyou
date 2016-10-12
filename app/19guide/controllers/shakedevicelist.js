module.exports = function($scope, $state, shakedevicelist, shakedevicedel, getDate, userinfo, ITEMS_PERPAGE){

    $scope.searchform = {};
    $scope.searchform.binding_type = '';

    $scope.usedate = '0';
    $scope.company_code = '';

    $scope.section = {};
	$scope.section.start = {};
	$scope.section.start.date = new Date();


	$scope.open = function(obj) {
		obj.opened = true;
	};

	//用户信息
    userinfo().then(function(res) {
        $scope.company_code = res.company_code;
    });

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

    	if($scope.usedate == '1')
        {
            $scope.searchform.binding_time = getDate($scope.section.start.date);
        }else{
        	$scope.searchform.binding_time = '';
        }

        para = angular.extend($scope.searchform, para);
        console.log(para);
        shakedevicelist.save(para, function(res){
            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

        });
    }
    $scope.load();

    $scope.create = function()
    {
        $state.go('app.shakedevice');
    }

    $scope.edit = function(id)
    {
        $state.go('app.shakedevice', {'id' : id});
    }

    $scope.del = function(id)
    {
        if(!confirm("确定要删除数据吗？")){
            return;
        }
        shakedevicedel.get({'id' : id}, function(res){
            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }
            alert('删除成功');
            $scope.load();
        });
    }
};