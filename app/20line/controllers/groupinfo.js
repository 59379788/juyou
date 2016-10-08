module.exports = function($scope, grouporder, $stateParams){

	var groupCode =  $stateParams.teamid;
	var linename = $stateParams.linename;

	$scope.linename = linename;

	grouporder.get({group_code : groupCode}, function(data){

		console.log(data);

		if(data.errcode !== 0) return;

		for(var i = 0; i < data.data.length; i++)
		{
			data.data[i].pers = angular.fromJson(data.data[i].tourist);
		}

		$scope.orders = data.data;

	});

  };
