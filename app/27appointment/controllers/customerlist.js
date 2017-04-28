module.exports = function($scope, $stateParams, $state,$uibModal,ITEMS_PERPAGE,FileUploader,findUserInfoList,getDate,toaster){
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();
 
    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };
    $scope.info = {
        'name' : '',
        'mobile' : '',
        'title' : '',
        'startTime' : ''
    }
    $scope.change = function(){
        $scope.info.startTime = getDate($scope.section.start.date);
    }
    $scope.search = function(){
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage 
        };
        para = angular.extend($scope.info,para);
        findUserInfoList.save(para,function(res){
            console.log(para);
            if(res.errcode!=0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;
        })
    };
    $scope.search();
    
    
    

};