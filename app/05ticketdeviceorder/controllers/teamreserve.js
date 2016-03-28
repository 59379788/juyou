module.exports = function($scope, $stateParams, grouptotaltodaylist, grouptotaltomlist){

	var view_code = $stateParams.view_code;

	$scope.today = function(){
		grouptotaltodaylist.get({'view_code' : view_code}, function(res){
			$scope.objs = res.data;
			var guid_info = eval('('+res.data[0].guide_info+')');
			for(var i=0; i<res.data.length; i++){
				$scope.objs[i].name = guid_info.name;
			}
		});
	};

	$scope.toma = function(){
		grouptotaltomlist.get({'view_code' : view_code}, function(res){
			$scope.objs = res.data;
			var guid_info = eval('('+res.data[0].guide_info+')');
			for(var i=0; i<res.data.length; i++){
				$scope.objs[i].name = guid_info.name;
			}
		});
	};

	$scope.today();
};