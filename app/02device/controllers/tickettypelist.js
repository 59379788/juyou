module.exports = function($scope, $uibModalInstance, view, typelist, device_code, add, del){


	//alert(view);

	$scope.ok = function () {
		$uibModalInstance.close();
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

	typelist.get({'view' : view, 'device_code' : device_code}, function(res){

		console.log(res);

		if(res.errcode === 0)
		{
			$scope.objs = [];
			$scope.objsKeyTemp = {};
			for (var index = 0; index < res.data.length; index++) {
				$scope.objsKeyTemp[res.data[index].CODE] = 1;
			}
			var count = 0;
			for(var key in $scope.objsKeyTemp){
				$scope.objs.push({name:'',arr:[]})
				for (var indexResData = 0; indexResData < res.data.length; indexResData++) {
					if(key == res.data[indexResData].CODE){
						if($scope.objs[count].arr.length < 1){
							$scope.objs[count].name = res.data[indexResData].NAME;
							$scope.objs[count].arr.push({name:res.data[indexResData]})
						}else{
							$scope.objs[count].arr.push({name:res.data[indexResData]})
						}

					}
				}
				count++;
			}
			console.log($scope.objs);
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
			'ticket_type' : obj.CODE,
			'ticket_type_attr' : obj.type_attr

		};

		var checkbox = $event.target;
        
        if(checkbox.checked)
        {
        	//alert('111111111');

        	add.save(para, function(res){

        		console.log(res);
				if(res.errcode != 0){
					alert(res.errmsg);
				}

        	});

        }
        else
        {
        	del.save(para, function(res){

        		console.log(res);
				if(res.errcode != 0){
					alert(res.errmsg);
				}

        	});
        	//alert('22222222');
        }


       
	};

};