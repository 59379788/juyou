module.exports = function($scope, $state, createuserinfo){

	$scope.objt = {};

	$scope.gogo = function(){
		createuserinfo.save($scope.objt, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				alert("注册实名成功");
				$state.go('app.userinfo');
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}
	

};
