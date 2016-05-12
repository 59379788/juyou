module.exports = function($scope, createuserinfo){

	$scope.objt = {};

	$scope.gogo = function(){
		$scope.objt.headphoto = '1';
		createuserinfo.save($scope.objt, function(res){

			console.log(res);

			if(res.errcode === 1000)
			{
				alert("实名认证成功");
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}
	

};
