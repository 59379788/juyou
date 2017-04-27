module.exports = function($scope, edituserinfo, updateidcard, obj, $uibModalInstance){

	$scope.objt = obj;

	$scope.gogo = function(){
		$scope.objt.userid = obj.userid;
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
		var para = {
			userid : obj.userid,
			mobile : obj.mobile,
			idcard : $scope.objt.papersno
		}
		updateidcard.save(para, function(res){

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
