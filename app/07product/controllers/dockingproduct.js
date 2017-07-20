module.exports = function ($scope, dockingproduct, getDate, $uibModal, $state, $resource) {

	$scope.changeState = 0;
	$scope.dockingList = [];
	$scope.dockingList = [
		{
			code: 0,
			name: "小径网络"
		},
		{
			code: 1,
			name: "自我游"
		}
	];

	$scope.searchform = {};
	$scope.searchform.dockingSystem = $scope.dockingList[0].code;

	$scope.load = function () {
		$scope.changeState++;
	}

};