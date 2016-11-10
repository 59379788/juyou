module.exports = function($scope, $state,$uibModal,rewardprice,rewardlist,rewardlistdel){
    $scope.rewardinfo = {
        'start_num' : '',
        'end_num' : '',
        'each_reward_price' : '' 
    };

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 10;         //每页显示几条
    // 声明一个数组
    $scope.getlist = function () {
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
      //  para = angular.extend($scope.rewardinfo, para);
        rewardlist.save(para,function (res) {
           if (res.errcode!== 0) {
               alert(res.errmsg);
               return; 
           }
           $scope.listobj = res.data.results;
           console.log($scope.listobj);

          
        })   
    }
    $scope.getlist();



    $scope.savereward = function () {
        $scope.numinfo = {
            'start_num' : '',
            'end_num' : '' 
        };
        var array = [];
        for (var i = 0; i < $scope.listobj.length; i++) {
            $scope.numinfo.start_num = $scope.listobj[i].start_num;
            $scope.numinfo.end_num = $scope.listobj[i].end_num;
            array.push($scope.numinfo);
        }
        console.log(array);
            if ($scope.rewardinfo.start_num) {}
        
                rewardprice.save($scope.rewardinfo, function (res) {
                    if (res.errcode !== 0) {
                    alert(res.errmsg); 
                    return;
                    }
                $scope.getlist();
                $scope.saveinfo = res.data;
                }) 
            
            
        

        
        
    }

    $scope.rewardlistdel = function (listid) {
        if (confirm("你确定要删除吗?")){ 
            rewardlistdel.save({'id' : listid}, function (res) {
                console.log({'id' : listid});
                if (res.errcode !== 0) {
                    alert(res.errmsg);
                    return; 
                }
                $scope.getlist();
               // console.log(res);
            })
        } else {

        }
        
    }




};