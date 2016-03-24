module.exports = function($scope, $stateParams, group){

	group.get({'group_id' : $stateParams.type}, function(res){

	//console.log(res);

		if(res.errcode === 0)
		{
			$scope.objs = res.data;
		}
		else
		{
			alert(res.errmsg);
		}

	});

};
