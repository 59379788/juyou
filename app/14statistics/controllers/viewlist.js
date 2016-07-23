module.exports = function($scope, $state, ITEMS_PERPAGE, getDate, $uibModal, viewdestorystatistichistorylist,
     viewdestorystatisticlist, govsubsidygoodscodelist, useddetaillist, grouplxslist, DateDiff){

    $scope.searchform = {};

    $scope.searchform.seltype = '0';

    $scope.viewarr = [];

    $scope.attrarr = [];

    $scope.dlq = {};

    var searchviewcode = null;

    $scope.total = {
        'buy' : 0,
        'used' : 0,
        'back' : 0,
        'total' : 0,
        'gov' : 0
    };

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();

    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

    /* 分页
     * ========================================= */
    // $scope.maxSize = 5;            //最多显示多少个按钮
    // $scope.bigCurrentPage = 1;      //当前页码
    // $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.load = function () {
        
        var fun;
    	var para;
    	var iDays;

    	if($scope.searchform.seltype == 0){
    		iDays = DateDiff(getDate($scope.section.start.date), getDate($scope.section.end.date));
			if(iDays > 14){
				alert("不能选择超过两周的日期哦\n如有需求请选择历史查询");
				return;
				//$scope.section.start.date = new Date();
				//$scope.section.end.date = new Date();
			}
    		fun = viewdestorystatisticlist;
    		para = {
	            start_time : getDate($scope.section.start.date) + " 00:00:00",
	            end_time : getDate($scope.section.end.date) + " 23:59:59"
	        };
    	}else{
    		fun = viewdestorystatistichistorylist;
    		para = {
	            start_time : getDate($scope.section.start.date),
	            end_time : getDate($scope.section.end.date)
	        };
    	}

        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        fun.save(para, function(res){

            if(res.errcode === 0)
            {
                $scope.objs = res.data;

                //--- 从结果里搜索出结果里有的景区 -- start
                console.log($scope.objs);
                var viewobj = {};
                var attrobj = {};
                var attrindex = 0;
                $scope.viewarr.splice(0,$scope.viewarr.length);
                $scope.attrarr.splice(0,$scope.attrarr.length);
                for(var m = 0, n = $scope.objs.length; m < n ;m++)
                {
                    var tmp = $scope.objs[m];
                    if(viewobj[tmp.place_code] === undefined)
                    {
                        viewobj[tmp.place_code] = tmp.place_name;
                    }
                    var attr = getAttr(tmp.type_name);
                    tmp.attr = attr;
                    if(attrobj[attr] === undefined)
                    {
                        attrobj[attr] = 1;
                    }
                }
                //console.log(attrobj);
                angular.forEach(viewobj, function (value, key) {
                    $scope.viewarr.push({
                        'code' : key,
                        'name' : value
                    });
                });
                angular.forEach(attrobj, function (value, key) {
                    $scope.attrarr.push({
                        'name' : key,
                        'value' : value
                    });
                });
                //console.log($scope.attrarr);
                //--- 从结果里搜索出结果里有的景区 -- end


                govsubsidygoodscodelist.get({}, function(res1){

                    //console.log(res1);
                    if(res1.errcode === 0)
                    {
                        $scope.subsidy = res1.data;
                        //console.log($scope.objs);
                        for(var i = 0, j = $scope.objs.length; i < j; i++)
                        {
                            var tmp = $scope.objs[i];
                            tmp.check = true;
                            
                            tmp.gov = 0;
                            for(var m = 0, n = $scope.subsidy.length; m < n; m++)
                            {
                                if($scope.subsidy[m]['goods_code'] == tmp.goods_code)
                                {
                                    tmp.gov = $scope.subsidy[m]['govsubsidy_price'];
                                    break;
                                }
                            }
                            
                        }

                        calcTotal();
                    }
                    else
                    {
                        alert(res1.errmsg);
                    }
                });
                //$scope.bigTotalItems = res.data.totalRecord;
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };
    $scope.load();

    $scope.detail = function (obj) {
        var modalInstance = $uibModal.open({
          template: require('../views/useddetail.html'),
          controller: 'useddetail',
          size: 'lg',
          resolve: {
            view : function(){
                return obj.view;
            },
            goods_code : function(){
                return obj.goods_code;
            },
            start_time : function(){
                return obj.date + " 00:00:00";
            },
            end_time : function(){
                return obj.date + " 23:59:59";
            },
            useddetaillist : function(){
                return useddetaillist;
            },
            grouplxslist : function(){
                return grouplxslist;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            
        });
    };

    $scope.ok = function(objs){console.log(objs);
    	for(var i=0; i<=objs.length; i++){
    		$scope.objs[i].check = true;
    	}
    	
    }

    $scope.cancel = function(objs){console.log(objs);
    	for(var i=0; i<=objs.length; i++){
    		$scope.objs[i].check = false;
    	}
    }

    $scope.clickbox = function (index) {

    	if($scope.objs[index].check == true){
    		$scope.objs[index].check = false;
    	}else{
    		$scope.objs[index].check = true;
    	}
    }

    //废弃
    $scope.goodscount = function (objs) {

    	$scope.total = {
	        'buy' : 0,
	        'used' : 0,
	        'back' : 0,
	        'total' : 0,
	        'gov' : 0
	    };

    	for(var i = 0, j = objs.length; i < j; i++)
        {
            var tmp = objs[i];
            if(tmp.check == true &&  tmp.place_code === searchviewcode){
            	$scope.total.buy += tmp.buy;
	            $scope.total.used += tmp.used;
	            $scope.total.back += tmp.back;
	            $scope.total.total += tmp.cost_price * tmp.used;
	            tmp.gov = 0;
	            for(var m = 0, n = $scope.subsidy.length; m < n; m++)
	            {
	                if($scope.subsidy[m]['goods_code'] == tmp.goods_code)
	                {
	                    tmp.gov = $scope.subsidy[m]['govsubsidy_price'];
	                    break;
	                }
	            }
	            $scope.total.gov += tmp.gov * tmp.used;
            }
        }
    }

    //景区下拉
    $scope.change = function(x){
        searchviewcode = x;
        calcTotal();
    }

    //属性点击事件
    $scope.checkattr = function(){
        calcTotal();
    }

    //结果过滤器
    $scope.myFilter = function (item) {

        console.log($scope.attrarr);

        //属性选择
        var attrflag = false;
        for(var i = 0, j = $scope.attrarr.length; i < j; i++)
        {
            var tmp = $scope.attrarr[i];
            if(tmp.name == item.attr && tmp.value == 1)
            {

                attrflag = true;
                break;
            }
        }

        //景区选择
        var viewflag = false;
        if(searchviewcode == null
        || item.place_code === searchviewcode)
        {
            viewflag = true;
        }

        var res = false;
        if(attrflag
        && viewflag
        )
        {
            res = true; 
        }

        return res;
    };

    //计算统计
    function calcTotal()
    {
        $scope.total = {
            'buy' : 0,
            'used' : 0,
            'back' : 0,
            'total' : 0,
            'gov' : 0
        };

        for(var i = 0, j = $scope.objs.length; i < j; i++)
        {
            var tmp = $scope.objs[i];

            //属性选择
            var attrflag = false;
            for(var m = 0, n = $scope.attrarr.length; m < n; m++)
            {
                var attrtmp = $scope.attrarr[m];
                if(attrtmp.name == tmp.attr && attrtmp.value == 1)
                {
                    attrflag = true;
                    break;
                }
            }

            //景区选择
            var viewflag = false;
            if(searchviewcode == null
            || tmp.place_code === searchviewcode)
            {
                viewflag = true;
            }

            if(attrflag
            && viewflag)
            {
                $scope.total.buy += tmp.buy;
                $scope.total.used += tmp.used;
                $scope.total.back += tmp.back;
                $scope.total.total += tmp.cost_price * tmp.used;
                $scope.total.gov += tmp.gov * tmp.used;
            }
        }
    }

    
    function getAttr(typename)
    {
        var start = typename.indexOf('【') + 1;
        var end = typename.indexOf('】');
        return typename.slice(start, end);
    }

};