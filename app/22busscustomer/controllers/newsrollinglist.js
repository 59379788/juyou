module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findNewsRollinginfolist,delNewsPhoto){   
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
                alert(res.errmsg);
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
        delNewsPhoto.save({'id':id},function(res) {
            console.log({'id':id});
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }           
            console.log(res);
            //alert('删除成功！');
            $scope.getlist();
        })
    }

 //    $scope.disagreeapply = function(love_record_id) {
 //        updateronationstate.save({'love_record_id':love_record_id, 'ronation_state':'2'},function(res) {
 //            if (res.errcode !== 0) {
 //                alert(res.errmsg);
 //                return;
 //            }
 //            console.log(res);
 //            $scope.getlist();

 //        });
  //  };

};