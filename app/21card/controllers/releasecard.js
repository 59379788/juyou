module.exports = function($scope,  $stateParams, getcardlist, cardinpool, statename, listinpool){
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
	$scope.state = statename.state;
    $scope.cardinfos = [];
    $scope.cardinfo = [];
    // 获取卡段列表 获取卡数量
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
     	cardinpool.save({'pool_code' : poolcode}, function(res){
			console.log(res);
			$scope.cardinfo = res.data;
			console.log($scope.cardinfo);
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


    $scope.typecard = {
        'startnum' : '',
        'endnum' : '',
        'card_status' : '',
        'card_type' : '',
        'card_giveout_time' : '',
        'card_giveout_target' : ''
        

        
    };
    $scope.cardlists = [];
    
    // 根据起始卡号 状态 查询卡池中的卡
    $scope.search = function(){
		//alert('sousuo');
		var cardparem = {'pool_code' : poolcode, 'startnum' : $scope.typecard.startnum ,'endnum' : $scope.typecard.endnum, 'card_status' : $scope.typecard.card_status };
		listinpool.save(cardparem, function(res){
			console.log(res);
			$scope.cardlists = res.data;
			//console.log($scope.typecard);
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	return;
			    }
     	});        
	};



};