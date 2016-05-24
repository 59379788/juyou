module.exports = function($scope, obj, createmechanism, $uibModalInstance){
	console.log(obj);
	$scope.ok = function () {
        createmechanism.save($scope.name, function(res){
            console.log(res);
            if(res.errcode === 0)
            {
                alert('创建成功');
                $uibModalInstance.close();
            }
            else
            {
              alert(res.errmsg);
            }
        });
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

};