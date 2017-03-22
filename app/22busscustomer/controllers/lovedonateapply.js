module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findloveactivercordlist,updateronationstate,toaster){   
	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    $scope.parameters = {
        'ronation_state' : ''
    };
    $scope.getlist = function () {
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        para = angular.extend($scope.parameters, para);
        findloveactivercordlist.save(para, function(res) {
            if (res.errcode !== 0) {
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

            
        })
    };
     
    $scope.getlist();

    $scope.agreeapply = function(love_record_id) {
        updateronationstate.save({'love_record_id':love_record_id, 'ronation_state':'1'},function(res) {
            if (res.errcode !== 0) {
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.getlist();

        });
    };

    $scope.disagreeapply = function(love_record_id) {
        updateronationstate.save({'love_record_id':love_record_id, 'ronation_state':'2'},function(res) {
            if (res.errcode !== 0) {
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.getlist();

        });
    };

};