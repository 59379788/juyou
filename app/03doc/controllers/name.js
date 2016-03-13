module.exports = function($scope, insert, $state, group){

	$scope.name = '';

	$scope.group_id = 'ticket_destory';

	// group.get({'group_id' : $stateParams.type}, function(res){

	// 	console.log(res);

	// 	if(res.errcode === 0)
	// 	{
	// 		$scope.objs = res.data;
	// 	}
	// 	else
	// 	{
	// 		alert(res.errmsg);
	// 	}

	// });

	$scope.gogo = function(){

		var api_id = (new Date()).valueOf();

		var para = {
			'group_id' : $scope.group_id,
			'api_id' : api_id,
			'text' : $scope.name,
			'text_type' : 0,
			'display_type' : 1,
			'asort' : 0
		};

		insert.save(para, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$state.go('app.doccreate', {'api_id' : api_id});
			}

		});

	};


};