module.exports = function($scope, $state, create){

	$scope.objt = {};

	$scope.objt.state = '1';
	$scope.objt.asort = '0';

	$scope.gogo = function(){

		create.save($scope.objt, function(res){

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