module.exports = function($scope, $state, $stateParams, addcardpool){
   var poolcode = $stateParams.poolcode;
   var poolname = $stateParams.poolname;
   console.log(poolname);
   console.log(poolcode);
   $scope.cardinfo = {
			'pool_name' : poolname,
			'pool_type' : '0'
		};  

	$scope.savecardpool = function(){
		 // 如果卡池编号非空，是修改卡池，否则是添加卡池
        if (poolcode !== '') {
    	console.log(poolcode);
    	//alert('卡池编号为空');
        var cardparem = {'pool_code' : poolcode,'pool_name':$scope.cardinfo.pool_name,'pool_type':$scope.cardinfo.pool_type};
          	
       } else {
    	var cardparem = {'pool_name':$scope.cardinfo.pool_name,'pool_type':$scope.cardinfo.pool_type};
         }

        console.log(cardparem);
		addcardpool.save(cardparem, function(res){
			console.log(res);
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	alert('成功');
			    	$state.go('app.cardpool');
			    	return;
			    }
			
     	});                
	};
};