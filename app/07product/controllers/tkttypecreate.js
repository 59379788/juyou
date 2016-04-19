module.exports = function($scope, $state, viewlist, tktcreate){

	$scope.objt = {};
	$scope.objt.used_state = '0';
	$scope.objt.state = '1';

	//景区下拉
	viewlist().then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        	$scope.objt.place_code = $scope.viewarr[0].code;
        }
        else
        {
            alert(res.errmsg);
        }
    });

	//保存按钮
	$scope.gogo = function(){

		tktcreate.save($scope.objt, function(res){

			if($scope.objt.name === undefined || $scope.objt.name == '')
			{
				alert('票种名称不能为空');
				return;
			}

			console.log(res);

			if(res.errcode === 0)
			{
				alert('保存成功');
				$state.go('app.tkttype');
			}
			else
			{
				alert(res.errmsg);
			}

		});

	};
};
