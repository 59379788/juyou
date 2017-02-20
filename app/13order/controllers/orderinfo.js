module.exports = function($scope, obj, $uibModalInstance){

    $scope.obj = obj;

    $scope.ok = function () {
    	//alert('ok');
    	$uibModalInstance.close();
    };

    $scope.cancel = function () {
    	$uibModalInstance.close();
    }

};