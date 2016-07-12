module.exports = function($scope, $uibModalInstance, code, groupdetail, backlist){

	$scope.objs = {};
	
	groupdetail.get({'code' : code}, function(res){
        if(res.errcode === 0)
		{
			$scope.objs = res.data;
		}
		else
		{
			alert(res.errmsg);
		}

    });

    backlist.get({'code' : code}, function(res){
        if(res.errcode === 0)
		{
			$scope.objsback = res.data;
		}
		else
		{
			alert(res.errmsg);
		}

    });

    $scope.cancel = function () {
		$uibModalInstance.close();
	};

};
