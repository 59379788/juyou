module.exports = function($scope, viewlist, tktcreate){

	//景区下拉
	viewlist().then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

	//保存按钮
	$scope.gogo = function(){

		tktcreate.save($scope.objt, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				alert('保存成功');
			}
			else
			{
				alert(res.errmsg);
			}

		});

	};
};
