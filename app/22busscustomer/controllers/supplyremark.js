module.exports = function($scope, $stateParams,id,state,confirm_name,saveconfirm,$uibModalInstance,toaster){
	console.log(id);
	$scope.confirminfo = {
	    'id' : id,
	    'state' : state,
	    'confirm_name' : confirm_name,
	    'remarks' : '' 
	};
    $scope.ok = function () {
        saveconfirm.save($scope.confirminfo, function(res){
        	console.log($scope.confirminfo);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
               // $uibModalInstance.close();
                
            }
            else
            {
              toaster.success({title:"",body:"确认成功!"});
              $uibModalInstance.close();
            }
        });
        
	    
        
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    
};