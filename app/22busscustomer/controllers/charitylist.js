module.exports = function($scope, $state, $stateParams, $uibModal,ITEMS_PERPAGE,findrecordforadminlist,updateronationstate){
    var love_activity_id = $stateParams.love_activity_id;
	  /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.info = {
       'activity_id' : love_activity_id,
       'ronation_type' : '2'
    };

  	$scope.getlist = function(){
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        para = angular.extend($scope.info, para); 
        findrecordforadminlist.save(para, function(res){
            console.log(para);
            if (res.errcode !== 0) {
                toaster.success({title:"",body : res.errmsg});
                return;
            }
            console.log(res);
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;
        });	
  	};
  	$scope.getlist();

  	$scope.agree = function(love_record_id){
          updateronationstate.save({'love_record_id':love_record_id,'ronation_state':'1'},function(res){
              console.log({'love_record_id':love_record_id,'ronation_state':'1'});
              if (res.errcode !== 0) {
                  toaster.success({title:"",body : res.errmsg});
                  return;
              }
              console.log(res);
              $scope.getlist();
          });
    };

    $scope.disagree = function(love_record_id){
        updateronationstate.save({'love_record_id':love_record_id,'ronation_state':'2'},function(res){
            console.log({'love_record_id':love_record_id,'ronation_state':'2'});
            if (res.errcode !== 0) {
                toaster.success({title:"",body : res.errmsg});
                return;
            }
            console.log(res);
            $scope.getlist();
        });
    };

};