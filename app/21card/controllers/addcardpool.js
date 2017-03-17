module.exports = function($scope, $state, $stateParams, cardpool, addcardpool, dictbytypelist, $uibModalInstance){

	$scope.cardinfo = {};

	dictbytypelist({'type' : 'user_pool_type'}).then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
            $scope.typearr = res.data;
            if(cardpool === undefined) {
				$scope.cardinfo.pool_type = '0';
            } else {
				$scope.cardinfo = cardpool;
            }
        }
        else
        {
            alert(res.errmsg);
        }
    });

	$scope.savecardpool = function(){
		addcardpool.save($scope.cardinfo, function(res){
			console.log(res);
		    if (res.errcode !== 0) {
                alert(res.errmsg);
		    } else {
		    	//alert('添加成功');
		    	$uibModalInstance.close();
		    }
			
     	});                
	};

	$scope.cancel = function(){

		$uibModalInstance.close();

	}

};