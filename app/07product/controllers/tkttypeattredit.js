module.exports = function($scope, $state, $stateParams, attrinfo, attrupdate){

	$scope.objt = {};

	attrinfo.get({'type_attr' : $stateParams.type_attr}, function(res){
		console.log(res);

		if(res.errcode === 0)
		{
			$scope.objt = res.data;
		}

	});

	$scope.gogo = function(){
		attrupdate.save($scope.objt, function(res){

			if($scope.objt.type_attr === undefined || $scope.objt.type_attr == '')
			{
				alert('属性编号不能为空');
				return;
			}

			console.log(res);

			if(res.errcode === 0)
			{
				alert('修改成功');
				$state.go('app.tkttypeattr');
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}
	

};
