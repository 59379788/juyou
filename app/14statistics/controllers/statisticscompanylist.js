module.exports = function($scope, getDate, orderstatisticscompanylist, 
    ITEMS_PERPAGE, orderstatisticscompanyhistorylist, DateDiff,
    $uibModal, orderstatisticsusedinfolist){

    $scope.searchform = {};

    $scope.searchform.seltype = '0';

    $scope.total = {
        'buy' : 0,
        'used' : 0,
        'back' : 0,
        'total' : 0
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
    		fun = orderstatisticscompanylist;
    		para = {
	            start_time : getDate($scope.section.start.date) + " 00:00:00",
	            end_time : getDate($scope.section.end.date) + " 23:59:59"
	        };
    	}else{
    		fun = orderstatisticscompanyhistorylist;
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
                'total' : 0
            };

            if(res.errcode === 0)
            {
        		$scope.objs = res.data;
                for(var i = 0, j = res.data.length; i < j; i++)
                {
                	if($scope.searchform.seltype == 1){
            			$scope.objs[i].name = res.data[i].sale_name;
            		}
                    $scope.total.buy += parseInt(res.data[i].buy);
                    $scope.total.used += parseInt(res.data[i].used);
                    $scope.total.back += parseInt(res.data[i].back);
                    $scope.total.total += parseInt(res.data[i].total_buy - res.data[i].total_back);
                }
                //$scope.objs = res.data;
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
          template: require('../views/statisticsdetail.html'),
          controller: 'statisticsdetail',
          size: 'lg',
          resolve: {
            day : function(){
                return obj.date;
            },
            sale_code : function(){
                return obj.sale_code;
            },
            sale_name : function(){
                return obj.name;
            },
            company_code : function(){
                return obj.company_code;
            },
            operation_login_name : function(){
                return undefined;
            },
            orderstatisticsusedinfolist : function(){
                return orderstatisticsusedinfolist;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            
        });
    };
    

};