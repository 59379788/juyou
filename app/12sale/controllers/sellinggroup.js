module.exports = function($scope, $state, grouplist, ITEMS_PERPAGE, getDate){

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

    var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
            stb_code:'001001'
        };
    
    $scope.load = function () {

        para = angular.extend($scope.searchform, para);

        para['arrival_date'] = getDate($scope.section.start.date);
        
        grouplist.save(para, function(res){

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
    //$scope.load();

    grouplist.save(para, function(res){

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
