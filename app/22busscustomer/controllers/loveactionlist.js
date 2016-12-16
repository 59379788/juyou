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

    $scope.charitylist = function(){
        $state.go('app.charitylist');
    };
    $scope.donatelist = function(){
        $state.go('app.donatelist');
    };
    $scope.expandlist = function(){
        $state.go('app.expandlist');
    };

};