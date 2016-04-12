module.exports = function($scope, $stateParams, attrinfo, attrupdate){

	attrinfo.get({'type_attr' : $stateParams.type_attr}, function(res){
		console.log(res);

		if(res.errcode === 0)
		{
			$scope.objt = res.data;
		}

	});

	$scope.gogo = function(){
		attrupdate.save($scope.objt, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				alert('修改成功');
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}
	

};
