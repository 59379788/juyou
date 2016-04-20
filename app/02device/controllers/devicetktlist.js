module.exports = function($scope, tktlist, $state){

	
	tktlist.get({'view' : 'J0061'}, function(res){

		console.log(res);

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