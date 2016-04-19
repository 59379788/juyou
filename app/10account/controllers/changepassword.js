module.exports = function($scope, changepassword){

	$scope.obj = {};
    
	$scope.gogo = function(){

		if($scope.obj.newPassword !== $scope.obj.newPassword2)
		{
			alert('两次输入的密码不一致。');
			return;
		}

		console.log($scope.obj);
		changepassword.save($scope.obj, {}, function(res){

			console.log(res);

			alert(res.message);

		});

	};

};