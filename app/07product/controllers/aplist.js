module.exports = function($scope, $state, $resource, ITEMS_PERPAGE, $uibModal,str2date,date2str,toaster
        

    ){

    $scope.searchform = {};

    $scope.create = function(){
        $state.go('app.newproduct');
    };

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

        para = angular.extend($scope.searchform, para);

        $resource('/api/ac/tc/ticketSaleService/getApplySaleList', {}, {})
        .save(para, function(res){

            console.log(res);
            if(res.errcode !== 0)
            {
                toaster.error({title: "提示", body:res.errmsg});
                return;
            }

            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

        });

    };
    $scope.load();

   


    $scope.info = function(id){

        //$state.go('app.editsale', {'id' : id, 'type' : 'info'});

        var modalInstance = $uibModal.open({
          template: require('../views/product.html'),
          controller: 'newproduct',
          url: '/product/edit/:id',
          size: 'lg',
          resolve: {
            'productid' : function(){
                return id;
            },
            what : function(){
                return 'info';
            },
            str2date : function(){
                return str2date;
            },
            date2str : function(){
                return date2str;
            },
            
          }
        });

        modalInstance.result.then(function () {
          //load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

    };


    $scope.pass = function(id){
        console.log(id);
        $resource('/api/ac/tc/ticketSaleService/updateSaleApplyPass', {}, {})
        .save({'id' : id}, function(res){
            console.log(res);
            if(res.errcode !== 0){
                // alert(res.errmsg);
                toaster.error({title: "提示", body:res.errmsg});
                return;
            }
            toaster.success({title: "提示", body:"操作成功!"});
            $scope.load();
        });
    };

    $scope.nopass = function(id){
        console.log(id);
        $resource('/api/ac/tc/ticketSaleService/updateSaleApplyNoPass', {}, {})
        .save({'id' : id}, function(res){
            console.log(res);
            if(res.errcode !== 0){
                // alert(res.errmsg);
                toaster.error({title: "提示", body:res.errmsg});
                return;
            }
            toaster.success({title: "提示", body:"操作成功!"});
            $scope.load();
        });
    };



};