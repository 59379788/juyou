module.exports = function($scope, $stateParams, $state,ITEMS_PERPAGE,findtradetypelist,deldictionary){
      var id = $stateParams.id;
      $scope.info = {
        'id' : id,
        'type' : '',
        'info' : ''
      }
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.search = function () {
        var para = {
                pageNo:$scope.bigCurrentPage, 
                pageSize:$scope.itemsPerPage,
            };
        para = angular.extend($scope.info,para); 
        findtradetypelist.save(para, function (res) {
            console.log(para);
            if (res.errcode != 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;
        });
      };

    $scope.getlist = function(){
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        findtradetypelist.save(para,function(res){
        if (res.errcode !== 0) {
            console.log(res.errmsg);
            return;
        }
        console.log(res);
        $scope.objs = res.data.results;
        $scope.bigTotalItems = res.data.totalRecord;
        });
    };
    $scope.getlist();
    $scope.adddic = function(){
        $state.go('app.dictionaryinfo');
    };
    $scope.change = function(id){
        $state.go('app.dictionaryinfo',{'id':id});

    };
    $scope.delete = function(id){
        deldictionary.save({'id' : id},function(res){
            if (res.errcode != 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            alert('删除成功！');
            $scope.getlist();
        });
    };

};