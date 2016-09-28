module.exports = function($scope, $stateParams, addcardpool){

	//alert('修改卡池信息');
    var poolcode = $stateParams.poolcode;
    console.log(poolcode);

    $scope.cardinfo = {
			'pool_name' : '',
			'pool_type' : '1'
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
			    	return;
			    }
     	});                
	};

};