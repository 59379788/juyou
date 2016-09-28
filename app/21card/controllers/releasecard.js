module.exports = function($scope,  $stateParams, getcardlist){
   var poolcode = $stateParams.poolcode;
    
    console.log(poolcode);
	/*$scope.resivecard = function(){
		console.log($scope.cardinfo.status);
		var cardparem = {'pool_code' : poolcode,'status':$scope.cardinfo.status};
        if ($scope.cardinfo.status === '1') {
        	
        } else if ($scope.cardinfo.status === '2'){
        	cardparem['cardnum'] = $scope.cardinfo.cardnum;
        } else if ($scope.cardinfo.status === '3'){
        	cardparem['startnum'] = $scope.cardinfo.startnum;
        	cardparem['endnum'] = $scope.cardinfo.endnum;
        } else {
        	alert('参数错误');
        }

        console.log(cardparem);
        

        	
		releasecard.save(cardparem, function(res){
			console.log(res);
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	alert('释放成功');
			    	return;
			    }
     	});                
	};*/

    $scope.cardinfo = [];
    // 获取卡段列表
	$scope.getcardlist = function(){
		
    	getcardlist.save({'pool_code' : poolcode}, function(res){
			console.log(res);
			$scope.cardinfos = res.data;
			console.log($scope.cardinfos);
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	//alert('12345');
			    	return;
			    }
     	});        
    	
    };
    $scope.getcardlist();

};