module.exports = function($scope, day, sale_name, sale_code, orderstatisticsusedinfolist,
	company_code, operation_login_name, $uibModalInstance){

	
    $scope.show = {};
    $scope.show.sale_name = sale_name;
    $scope.show.day = day;

    


    $scope.load = function () {

    	var para = {
			day : day,
			sale_code : sale_code,
			company_code : company_code
		};

		if(operation_login_name !== undefined) {
			para["operation_login_name"] = operation_login_name;
		}

		orderstatisticsusedinfolist.save(para, function(res){
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
	$scope.load();
	

	$scope.cancel = function () {
		$uibModalInstance.close();
	};

};
