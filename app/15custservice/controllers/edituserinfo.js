module.exports = function($scope, edituserinfo, updateidcard, updatemobile, obj, $uibModalInstance){

	$scope.objt = obj;
	//修改姓名地址
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
	//修改身份证号
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
	//修改手机号码
	$scope.koko = function(){
		var para = {
			userid : obj.userid,
			mobile : obj.mobile
		}
		updatemobile.save(para, function(res){

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
