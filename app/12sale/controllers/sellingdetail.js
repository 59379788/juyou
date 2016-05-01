module.exports = function($scope, $state, $stateParams, groupdetail){

	$scope.objs = {};
	
	groupdetail.get({'code' : $stateParams.code}, function(res){
        if(res.errcode === 0)
		{
			if(res.data.length === 0){
				alert("暂无操作记录");
				$state.go('app.sellinggroup');
			}
			$scope.objs = res.data;console.log($scope.objs);
		}
		else
		{
			alert(res.errmsg);
		}

    });

};
