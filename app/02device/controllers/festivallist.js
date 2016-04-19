module.exports = function($scope, $uibModalInstance, view, viewfestivallist){


	$scope.today = function() {
		$scope.dt = new Date();
	};
	$scope.today();

	$scope.opened = false;
	$scope.open = function(obj) {
		$scope.opened = true;
	};

	$scope.ok = function () {
		$uibModalInstance.close();
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

	//节日列表
	function load(){
		viewfestivallist.get({'view' : view}, function(res){
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
	}
	load();



	$scope.add = function(){




	};

	// $scope.selection = function($event, obj){

	// 	console.log(obj);

	// 	var para = {
	// 		'device_code' : device_code,
	// 		'ticket_type' : obj.code,
	// 		'ticket_type_attr' : obj.type_attr

	// 	};

	// 	var checkbox = $event.target;
        
 //        if(checkbox.checked)
 //        {
 //        	//alert('111111111');

 //        	add.save(para, function(res){

 //        		console.log(res);

 //        	});

 //        }
 //        else
 //        {
 //        	del.save(para, function(res){

 //        		console.log(res);

 //        	});
 //        	//alert('22222222');
 //        }


       
	// };

};