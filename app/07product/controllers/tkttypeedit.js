module.exports = function($scope, $state, $stateParams, viewlist, tktinfo, tktupdate){

	//景区下拉
	viewlist().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

	tktinfo.get({'id' : $stateParams.id}, function(res){
		console.log(res);

		if(res.errcode === 0)
		{
			$scope.objt = res.data;
		}

	});

	$scope.gogo = function(){
		tktupdate.save($scope.objt, function(res){

			if($scope.objt.name === undefined || $scope.objt.name == '')
			{
				alert('票种名称不能为空');
				return;
			}

			console.log(res);

			if(res.errcode === 0)
			{
				alert('修改成功');
				$state.go('app.tkttype');
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}

};
