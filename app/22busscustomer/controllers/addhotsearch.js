module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,toaster){  
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.info = {
        '' : '',
        '' : '',
        '' : ''
    }
    $scope.add = function () {
        
    };

    
    
};