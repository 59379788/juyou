module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findactivityforadminlist){  
	$scope.getlist = function() {
        findactivityforadminlist.save({},function(res){
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            $scope.objs = res.data.results;

        });
    };
    $scope.getlist();

    $scope.charitylist = function(love_activity_id){
        alert('义卖');
        $state.go('app.charitylist',{'love_activity_id':love_activity_id});
    };
    $scope.donatelist = function(love_activity_id){
        $state.go('app.donatelist',{'love_activity_id':love_activity_id});
    };
    $scope.expandlist = function(love_activity_id){
        $state.go('app.expandlist',{'love_activity_id' : love_activity_id});
    };

};