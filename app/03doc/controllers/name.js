module.exports = function($scope, insert, $state){

	$scope.name = '';


	$scope.gogo = function(){

		alert($scope.name);

		var api_id = (new Date()).valueOf();

		var para = {
			'group_id' : 'ticket_destory',
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