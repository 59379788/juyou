module.exports = function($scope, $state,$stateParams,$uibModal,rewardprice,rewardlist,rewardlistdel){
    var sale_code = $stateParams.sale_code;
    $scope.productinfo = {
        'sale_code' : sale_code
    };
    console.log(sale_code);
    $scope.rewardinfo = {
        'start_num' : '',
        'end_num' : '',
        'each_reward_price' : '',
        'sale_code' : sale_code 
    };

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 10;         //每页显示几条
    
    $scope.listsinfo = { 
        'sale_code' :sale_code
    };
    $scope.getlist = function () {
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        para = angular.extend($scope.listsinfo, para);
        rewardlist.save(para,function (res) {
           if (res.errcode!== 0) {
               alert(res.errmsg);
               return; 
           }
           $scope.listobj = res.data.results;
           $scope.bigTotalItems = res.data.totalRecord;
           console.log(res.data);

          
        })   
    }
    $scope.getlist();



    $scope.savereward = function () {
        if ($scope.rewardinfo.start_num!==''&&$scope.rewardinfo.end_num!==''&&$scope.rewardinfo.each_reward_price!=='') {
            rewardprice.save($scope.rewardinfo, function (res) {
            console.log($scope.rewardinfo);
            if (res.errcode !== 0) {
                alert(res.errmsg); 
                return;
            }    
                $scope.saveinfo = res.data;
                $scope.getlist();
                console.log($scope.saveinfo);
        }) 
        } else { 
            alert('数据填写不完全！');
        }
                 
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