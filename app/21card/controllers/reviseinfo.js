module.exports = function($scope, $state, $stateParams, addcardpool){
    var poolcode = $stateParams.poolcode;
    var poolname = $stateParams.poolname;
    var pooltype = $stateParams.pooltype;
    console.log(poolname);
    console.log(poolcode);
    console.log(pooltype);

    $scope.cardinfo = {
	    'pool_name' : poolname,
	    'pool_type' : ''
	};  
    if (pooltype === '基本') {
        $scope.cardinfo.pool_type = '0';  
    } else if(pooltype === '金卡'){
        $scope.cardinfo.pool_type = '1';  
    }
	$scope.savecardpool = function(){
		 // 如果卡池编号非空，是修改卡池，否则是添加卡池
        if (poolcode !== '') {
    	    console.log(poolcode);
            var cardparem = {'pool_code' : poolcode,'pool_name':$scope.cardinfo.pool_name,'pool_type':$scope.cardinfo.pool_type};  	
        } else {
    	    var cardparem = {'pool_name':$scope.cardinfo.pool_name,'pool_type':$scope.cardinfo.pool_type};
        }
        console.log(cardparem);
		addcardpool.save(cardparem, function(res){
			console.log(res);
			    if (res.errcode !== 0) {
                    alert(res.errmsg);
			    } else {
			    	alert('修改卡池成功');
			    	$state.go('app.cardpool');
			    }	
     	});                
	};
};
