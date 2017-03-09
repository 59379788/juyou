module.exports = function($scope, getDate, groupcountjqlist){

    $scope.searchform = {};

    $scope.total = {
        'book_count' : 0,
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
        
        var para = {
            start : getDate($scope.section.start.date),
            end : getDate($scope.section.end.date)
        };

        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        groupcountjqlist.save(para, function(res){

            console.log(res);

            $scope.total = {
		        'book_count' : 0,
                'actual_count' : 0,
		        'total' : 0
		    };

            if(res.errcode === 0)
            {
                for(var i = 0, j = res.data.length; i < j; i++)
                {
                    $scope.total.actual_count += parseInt(res.data[i].actual_count);
                    $scope.total.total += parseInt(res.data[i].actual_count * res.data[i].cost_price);
                }
                $scope.objs = res.data;
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };
    $scope.load();

    
    

};