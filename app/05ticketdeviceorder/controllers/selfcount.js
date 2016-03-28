module.exports = function($scope, $stateParams, destorytotalbytypelist){

	$scope.device = '90010091004';

	$scope.submit = function(){
		destorytotalbytypelist.get({'device' : $scope.device, 'view' : $stateParams.view}, function(res){
			$scope.objs = res.data;
		});
	};
	
};