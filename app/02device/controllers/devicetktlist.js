module.exports = function($scope, tktlist, $state, $stateParams){

	tktlist.save({'view' : $stateParams.placecode}, function(res){

		console.log(res);
		console.log($stateParams.placecode);

		if(res.errcode === 0)
		{
			$scope.objs = res.data;
		}
		else
		{
			alert(res.errmsg);
		}

	});


	$scope.edit = function(id){

		$state.go('app.configurationticket', {'tktcode' : id});

	};

};