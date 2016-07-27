module.exports = function($scope, edituserinfo, oneuserinfo, updateUserSubsidy, mobile, $uibModalInstance){

	$scope.objt = {};

	oneuserinfo.get({'mobile' : mobile}, function(res){
		console.log(res);

		if(res.errcode === 0)
		{
			$scope.objt = res.data;
		}

	});

	$scope.gogo = function(){
		$scope.objt.mobile = mobile;
		edituserinfo.save($scope.objt, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$uibModalInstance.close();
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}

	$scope.xoxo = function(){
		$scope.objt.mobile = mobile;
		updateUserSubsidy.save($scope.objt, function(res){

			console.log($scope.objt);

			if(res.errcode === 0)
			{
				$uibModalInstance.close();
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}
	

};
