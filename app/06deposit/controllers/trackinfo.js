module.exports = function($scope, $state, trackinfo, ITEMS_PERPAGE){

    //console.log({'seller_code' : obj.seller_code});

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
            'pageNo' : $scope.bigCurrentPage, 
            'pageSize' : $scope.itemsPerPage,
            'seller_code' : 'L0002'
        };

        //para = angular.extend($scope.searchform, para);
        
        trackinfo.save(para, function(res){

            console.log(res);

            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }

            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

        });

    };
    $scope.load();

    // trackinfo.get({'seller_code' : 'L0002'}, function(res){

    //     console.log(res);

    //     if(res.errcode === 0)
    //     {
    //         $scope.objs = res.data.results;
    //     }
    //     else
    //     {
    //         alert(res.errmsg);
    //     }

    // });

    // $scope.obj = {};
    // $scope.obj.company_code = obj.seller_code;
    // $scope.obj.balance_price = 0;

    // $scope.ok = function () {
    //     console.log($scope.obj);
    //     recharge.save($scope.obj, function(res){

    //         console.log(res);

    //         if(res.errcode === 0)
    //         {
    //             alert('充值成功');
    //             $uibModalInstance.close();
    //         }
    //         else
    //         {
    //           alert(res.errmsg);
    //         }

    //     });
        
    // };

    // $scope.cancel = function () {
    //   $uibModalInstance.dismiss('cancel');
    // };
    
};