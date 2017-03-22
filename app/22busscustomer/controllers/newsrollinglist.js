module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findNewsRollinginfolist,delNewsPhoto,toaster){   
	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
 //    $scope.parameters = {
 //        'ronation_state' : ''
 //    };
    $scope.getlist = function () {
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        // para = angular.extend($scope.parameters, para);
        findNewsRollinginfolist.save(para,function(res) {
            console.log(para);
            if (res.errcode !== 0) {
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(para);
            console.log(res);
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

            
        })
    };
     
    $scope.getlist();

    $scope.addnewsrolling = function() {
        $state.go('app.addnewsrolling');
    };
    $scope.delete = function(id) {
        if (confirm('确定要删除吗?')) {
            delNewsPhoto.save({'id':id},function(res) {
                console.log({'id':id});
                if (res.errcode !== 0) {
                    toaster.success({title:"",body:res.errmsg});
                    return;
                }           
                toaster.success({title:"",body:"删除成功!"});
                $scope.getlist();
            })
            return;
        } 
        
    };

    $scope.edit = function(id) {
        $state.go('app.addnewsrolling',{'id':id});
    };


 

};