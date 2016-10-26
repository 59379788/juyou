module.exports = function($scope, $state, code, $uibModalInstance, goodoffsale){

    console.log(code);

    $scope.obj = {
    	'off_reason' : ''
    };
    
    $scope.ok = function () {
    	
        console.log($scope.obj);
        if ($scope.obj.off_reason !== '') { 
        	goodoffsale.save($scope.obj, {'code' : code}, function(res){
            if(res.errcode === 0)
            {
                alert('下架成功');
                $uibModalInstance.close();
                
            }
            else
            {
              alert(res.errmsg);
            }
           });
        } else { 
        	alert('请填写下架原因');
        	return;
        }
	    
        
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    
};