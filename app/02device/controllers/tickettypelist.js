module.exports = function($scope, $uibModalInstance, view, typelist, device_code, add, del){


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

		console.log(obj);

		var para = {
			'device_code' : device_code,
			'ticket_type' : '',
			'ticket_type_attr' : ''

		};

		var checkbox = $event.target;
        
        if(checkbox.checked)
        {
        	//alert('111111111');

        	// add.save({}, function(res){



        	// });

        }
        else
        {
        	//alert('22222222');
        }


       
	};

};