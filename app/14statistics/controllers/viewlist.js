module.exports = function($scope, $state, ITEMS_PERPAGE, getDate, $uibModal, viewdestorystatistichistorylist,
     viewdestorystatisticlist, govsubsidygoodscodelist, useddetaillist, grouplxslist, DateDiff){

    $scope.searchform = {};

    $scope.searchform.seltype = '0';

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

            console.log(res);

             $scope.total = {
                'buy' : 0,
                'used' : 0,
                'back' : 0,
                'total' : 0,
                'gov' : 0
            };

            if(res.errcode === 0)
            {
                $scope.objs = res.data;

                govsubsidygoodscodelist.get({}, function(res1){

                    //console.log(res1);
                    if(res1.errcode === 0)
                    {
                        $scope.subsidy = res1.data;
                        console.log($scope.objs);
                        for(var i = 0, j = $scope.objs.length; i < j; i++)
                        {
                            var tmp = $scope.objs[i];
                            tmp.check = true;
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

                        console.log($scope.total);
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

    $scope.detail = function (view, goods_code) {
        var modalInstance = $uibModal.open({
          template: require('../views/useddetail.html'),
          controller: 'useddetail',
          size: 'lg',
          resolve: {
            view : function(){
                return view;
            },
            goods_code : function(){
                return goods_code;
            },
            start_time : function(){
                return getDate($scope.section.start.date) + " 00:00:00";
            },
            end_time : function(){
                return getDate($scope.section.end.date) + " 23:59:59";
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

    $scope.goodscount = function (objs) {

    	$scope.total = {
	        'buy' : 0,
	        'used' : 0,
	        'back' : 0,
	        'total' : 0,
	        'gov' : 0
	    };

    	for(var i = 0, j = $scope.objs.length; i < j; i++)
        {
            var tmp = objs[i];
            if(tmp.check == true){
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

};