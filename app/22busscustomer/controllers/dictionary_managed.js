module.exports = function($scope, $stateParams, $state,ITEMS_PERPAGE,findtradetypelist,deldictionary,findTypeList,toaster){
      $scope.info = {
        'type' : '',
        'info' : ''
      }
      $scope.searchform = {
        'selected' :{
            'type' : ''
        }
    };
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.search = function () {
        $scope.info.type=$scope.searchform.selected.type;
        var para = {
                pageNo:$scope.bigCurrentPage, 
                pageSize:$scope.itemsPerPage,
            };
        para = angular.extend($scope.info,para); 
        findtradetypelist.save(para, function (res) {
            if (res.errcode != 0) {
                alert(res.errmsg);
                return;
            }
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;
        });
      };

    $scope.gettypelist = function (){
        findTypeList.save($scope.searchform,function(res){
            if (res.errcode!=0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            $scope.datas = res.data;

        })
    };
    $scope.gettypelist();
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
        if (confirm('确定删除吗?')) {
            deldictionary.save({'id' : id},function(res){
                if (res.errcode != 0) {
                    alert(res.errmsg);
                    return;
                }
                console.log(res);
                toaster.success({title: "",body : "删除成功!"});
                $scope.getlist();
            });
            return;
        }
        // deldictionary.save({'id' : id},function(res){
        //     if (res.errcode != 0) {
        //         alert(res.errmsg);
        //         return;
        //     }

        //     console.log(res);
        //     alert('删除成功！');
        //     $scope.getlist();
        // });
    };

};