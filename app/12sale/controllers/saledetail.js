module.exports = function($scope, $uibModalInstance, groupsale, code){
	
	$scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    groupsale.get({'code' : code}, {}, function(res){

        console.log(res);

        $scope.objs = res.data;

	});



};
