module.exports = function($scope, $stateParams, viewlist, tktinfo, tktupdate){

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
