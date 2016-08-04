module.exports = function($scope, infoticket, destoryticket, ITEMS_PERPAGE){

	$scope.searchform = {};

	/* 分页
     * ========================================= */
    $scope.maxSize = 10;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {

    	if($scope.searchform.para.length == '8'){
    		$scope.searchform.code = $scope.searchform.para;
    	}else if($scope.searchform.para.length == '11'){
    		$scope.searchform.mobile = $scope.searchform.para;
    	}else{
    		alert("位数错误");
    		return;
    	}

    	var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

        para = angular.extend($scope.searchform, para);
        infoticket.save(para, function(res){

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

    $scope.destory = function (code) {

    	var destorypara = {
            code:code, 
            num:1,
            device:'hdsw88888888'
        };

        /*var para = '{"body":{"code":"' + code + '", "num":"1", "device":"hdsw88888888"},"head":{}}';*/

    	if(confirm("确定要销票？")){
    		destoryticket.save(destorypara, function(res){

	         	console.log(res);

	         	if(res.errcode == 0)
	         	{
	         		alert("销票成功");
	         		$scope.load();
	         	}else{
	         		alert(res.errmsg);
	         	}

	        });
    	}
    	
    }

};