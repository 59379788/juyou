module.exports = function($scope, $uibModalInstance, view){


	alert(view);

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

};