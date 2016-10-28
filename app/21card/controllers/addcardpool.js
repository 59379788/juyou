module.exports = function($scope, $state, $stateParams, addcardpool){
    $scope.cardinfo = {
	    'pool_name' : '',
	    'pool_type' : '0'
	};  

	$scope.savecardpool = function(){
        var cardparem = {'pool_name':$scope.cardinfo.pool_name,'pool_type':$scope.cardinfo.pool_type};
        console.log(cardparem);
		addcardpool.save(cardparem, function(res){
			console.log(res);
			    if (res.errcode !== 0) {
                    alert(res.errmsg);
			    } else {
			    	alert('添加卡池成功');
			    	$state.go('app.cardpool');
			    }
			
     	});                
	};

};