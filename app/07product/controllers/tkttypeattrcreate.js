module.exports = function($scope, $state, attrcreate){

	$scope.objt = {};

	//保存按钮
	$scope.gogo = function(){

		attrcreate.save($scope.objt, function(res){

			if($scope.objt.type_attr === undefined || $scope.objt.type_attr == '')
			{
				alert('属性编号不能为空');
				return;
			}

			console.log(res);

			if(res.errcode === 0)
			{
				alert('保存成功');
				$state.go('app.tkttypeattr');
			}
			else
			{
				//alert(res.errmsg);
				if(res.errmsg !== ""){
					alert("重复的属性编号");
				}
			}

		});

	};
	

};
