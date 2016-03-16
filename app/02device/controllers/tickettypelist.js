module.exports = function($scope, $uibModalInstance, view, typelist){


	//alert(view);

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};


	typelist.get({'view' : view}, function(res){

		console.log(res);

		if(res.errcode === 0)
		{
			$scope.objs = res.data;
		}
		else
		{
			alert(res.errmsg);
		}

	});

};