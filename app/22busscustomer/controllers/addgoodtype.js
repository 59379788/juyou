module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,savetype){  
    $scope.info = {
        'label' : ''
    };
	$scope.addtype = function() {
        savetype.save($scope.info,function(res){
            console.log($scope.info);
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
        });
    };

};