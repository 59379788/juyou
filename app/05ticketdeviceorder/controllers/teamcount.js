module.exports = function($scope, $stateParams, grouptotalbytpyelist){

	var view_code = $stateParams.view_code;

	grouptotalbytpyelist.get({'view_code' : view_code}, function(res){
		$scope.objs = res.data;
	});
};