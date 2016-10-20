module.exports = function($scope, $state, code, $uibModalInstance, goodoffsale){

    console.log(code);

    $scope.obj = {
    	'off_reason' : ''
    };
    
    $scope.ok = function () {
    	
        console.log($scope.obj);
	    goodoffsale.save($scope.obj, {'code' : code}, function(res){

            console.log(res);
            if ($scope.obj.off_reason === '') { 
            	alert('请填写下架原因');
            }
            else if(res.errcode === 0)
            {
                alert('下架成功');
                $uibModalInstance.close();
                // 刷新页面
                
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