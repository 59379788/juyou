module.exports = function($scope, $uibModalInstance, view, typelist, device_code){


	//alert(view);

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};


	typelist.get({'view' : view, 'device_code' : device_code}, function(res){

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


	$scope.selection = function($event, obj){

		alert(obj.iselected);

		var checkbox = $event.target;
        var action = (checkbox.checked?'add':'remove');

        alert(action);
       // updateSelected(action,id,checkbox.name);

	};

};