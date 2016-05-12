module.exports = function($scope, orderstatisticslist, getDate, dataScope, salelist){

	$scope.line = {};
	$scope.line.labels = [];
    //$scope.line.labels = dataScope('2016-05-4', '2016-05-11');//["January", "February", "March", "April", "May", "June", "July"];
    $scope.line.series = [];//['畅游卡套票'];
    $scope.line.data = [
        // [65, 59, 80, 81, 56, 55, 40],
        // [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.searchform = {};
    var view = new Object();
    $scope.viewarr = [];

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date(new Date().getTime() - 7 * 24 * 3600 * 1000);

    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

    salelist.get({}, function(res){

    	console.log(res);

    	/* 销售品存储结构
         * ========================================= */
        
        //var resview = new Array();

        if(res.errcode !== 0)
        {
            alert(res.errmsg);
            return;
        }

        //用景区编号作为存储结构的属性，值是数组
        for(var i = 0, j = res.data.length; i < j; i++)
        {
            var tt = res.data[i];
            var v = tt.place_code;
            var type = tt.sale_category;

            if(!view.hasOwnProperty(v))
            {
                view[v] = new Object();
                view[v].salearr = new Array();
                //view[v].type = new Object();
                view[v].viewname = tt.place_name;
                view[v].viewcode = tt.place_code;
                $scope.viewarr.push(view[v]);
            }

            view[v].salearr.push(tt);
        }

        $scope.searchform.place_code = $scope.viewarr[0].viewcode;
        $scope.salearr = $scope.viewarr[0].salearr;
        $scope.searchform.sale_code = $scope.salearr[0].code;
        
    });

 

    $scope.change = function(code){

    	$scope.salearr = view[code].salearr;
    	$scope.searchform.sale_code = $scope.salearr[0].code;
    };

    $scope.changesale = function(index){

    	//alert(index);
    };

    $scope.load = function(){

    	var start = getDate($scope.section.start.date);
    	var end = getDate($scope.section.end.date);

    	var para = {
	    	'start_time' : start + " 00:00:00",
            'end_time' : end + " 23:59:59",
	        'sale_code' : $scope.searchform.sale_code
	    };

	    $scope.line.labels = dataScope(start, end);

	    var labels = {};
	    for(var i = 0, j = $scope.line.labels.length; i < j; i++)
		{
			labels[$scope.line.labels[i]] = 0;
		}
		$scope.line.data = [];
	    orderstatisticslist.save(para, function(res){

	    	if(res.errcode === 0)
	    	{
	    		var arr = [];
	    		for(var i = 0, j = res.data.length; i < j; i++)
	    		{
	    			labels[res.data[i].date] = res.data[i].buy;
	    		}
	    		angular.forEach(labels, function (value, key) {
				    //console.log(key + ':' + value);
				    arr.push(value);
				});
	     		$scope.line.data.push(arr);
	    	}
	    	else
	    	{
	    		alert(res.errmsg);
	    	}

	    	console.log($scope.line.data);

	    });

    }
    $scope.load();

};