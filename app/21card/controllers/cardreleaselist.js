/**
*卡订单列表
*ml
*/

module.exports = function($scope, cardreleaselist, getDate){

    $scope.searchform = {};

    $scope.total = {
        'num' : 0,
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

    $scope.load = function () {

    	$scope.total = {
	        'num' : 0,
	        'total' : 0
	    };
        
        var para = {
            start_time : getDate($scope.section.start.date) + " 00:00:00",
            end_time : getDate($scope.section.end.date) + " 23:59:59"
        };

        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        cardreleaselist.save(para, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                $scope.objs = res.data;

                for(var i=0; i<=res.data.length; i++) {
                	var tmp = res.data[i];
                	$scope.total.num += tmp.num;
                	$scope.total.total += tmp.all_price;
                }
                
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };
    $scope.load();

};