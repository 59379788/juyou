/**
*卡订单列表
*ml
*/

module.exports = function($scope, cardproductorderlist, ITEMS_PERPAGE, getDate, $state, $stateParams){

    //参数mobile,username,paperno,code,product_code,cardno,seller_code,start_time,end_time
    var par = $stateParams;

    //搜索条件
    $scope.searchform = { 
    	'mobile' : '',
    	'username' : '',
    　　'papersno' :　'',
        'code' : '',
        'cardno' : '',
        'product_code' : '',
        'seller_code' : '',
        'start_time' : '',
        'end_time' : ''
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
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    // 卡订单列表
    $scope.load = function(){

        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
            start_time : getDate($scope.section.start.date) + " 00:00:00",
            end_time : getDate($scope.section.end.date) + " 23:59:59"
        };

        para = angular.extend($scope.searchform, para);

        cardproductorderlist.save(par, function(res){

            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }

            $scope.objs = res.data.results;
            console.log($scope.objs);

        });


    };
    $scope.load();

    //查看详情
    $scope.info = function(code){
        $state.go('app.cardorderinfo', {'code' : code});
    };

    // 搜索
    $scope.searchinfo = function(){ 
    	alert('souuo');
    	cardproductorderlist.save($scope.searchform, function(res){
    		console.log($scope.searchform);

            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }

            $scope.objs = res.data.results;
            console.log($scope.objs);

        });

    };


};