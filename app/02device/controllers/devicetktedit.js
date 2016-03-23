module.exports = function($scope, info, $stateParams, slist){

	//机器id
	var id = $stateParams.id;

	slist().then(function(res) {
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

	info.get({'id' : id}, function(res){

		console.log(res);

		if(res.errcode === 0)
		{
			$scope.obj = res.data;
		}
		else
		{
			alert(res.errmsg);
		}

	});


};