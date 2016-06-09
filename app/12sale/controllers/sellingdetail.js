module.exports = function($scope, $uibModalInstance, code, groupdetail){

	$scope.objs = {};
	
	groupdetail.get({'code' : code}, function(res){
        if(res.errcode === 0)
		{
			if(res.data.length === 0){
				alert("暂无操作记录");
				$uibModalInstance.close();
				//$state.go('app.sellinggroup');
			}
			$scope.objs = res.data;console.log($scope.objs);
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
