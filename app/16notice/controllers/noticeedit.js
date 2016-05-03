module.exports = function($scope, $state, $stateParams, update, myinfo){

	$scope.objt = {};

	myinfo.get({'id' : $stateParams.id}, function(res){
		console.log(res.data);

		if(res.errcode === 0)
		{
			$scope.objt = res.data;
		}
		else
		{
			alert(res.errmsg);
		}
	});

	$scope.gogo = function(){

		$scope.objt.id = $stateParams.id;

		update.save($scope.objt, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$state.go('app.createnotice');
			}
			else
			{
				alert(res.errmsg);
			}

		});

	};
	
};