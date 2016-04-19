module.exports = function($scope, $state, goodscreate, viewlist){

	$scope.goodsobj = {};
	$scope.goodsobj.state = 0;

	//基本信息 景区下拉
	viewlist().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        	$scope.goodsobj.place_code=$scope.viewarr[0].code;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    //基本信息 保存
	$scope.goodsgo = function(){
		$scope.goodsobj.cost_price *= 100;
		console.log($scope.goodsobj);
		goodscreate.save($scope.goodsobj, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$state.go('app.editgoods', {'id' : res.data.uuid});
			}
			else
			{
				alert(res.errmsg);
			}

		});
	};


	
};