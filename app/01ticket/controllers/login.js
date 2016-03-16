module.exports = function($scope, login){

	$scope.device = '';
	$scope.password = '';


	$scope.gogo = function(){


		alert('asdsadsadasdasasd');

		login.save({'password' : $scope.password, 'device' : $scope.device}, function(res){

			console.log(res);
			


		});



	};


};