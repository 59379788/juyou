module.exports = function($scope,  $stateParams, getcardlist, cardinpool, statename, listinpool, targetcard){
   var poolcode = $stateParams.poolcode;
  //  console.log(poolcode);
    $scope.typecard = {
        'startnum' : '',
        'endnum' : '',
        'card_status' : '',
        'card_type' : '',
        'card_giveout_time' : '',
        'card_giveout_target' : ''
    };
    $scope.infos = [];
    $scope.getcardaim = function(){ 
        targetcard.save({'pool_code' : poolcode}, function(res){ 
      	    console.log({'pool_code' : poolcode});
      	    if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
			}
			$scope.targetinfo = res.data;
			console.log(res);
			    	
	    });
      
    };

    $scope.getcardaim();

    
	$scope.state = statename.state;
    $scope.cardinfos = [];
    $scope.cardinfo = [];
    // 获取卡段列表 获取卡数量
	$scope.getcardlist = function(){
    	getcardlist.save({'pool_code' : poolcode}, function(res){	
			    if (res.errcode !== 0) {
                    alert(res.errmsg);
			    } else {
			    	$scope.cardinfos = res.data;
			    	return;
			    }
     	});  
     	// 卡池中卡数量
     	cardinpool.save({'pool_code' : poolcode}, function(res){
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
			    } else {
			    	$scope.cardinfo = res.data;
			    	return;
			    }
     	});  	
    };
    $scope.getcardlist();


    
    $scope.cardlists = [];
    
    // 根据起始卡号 状态 发卡目标查询卡池中的卡
    $scope.search = function(){
		//alert('sousuo');
		var cardparem = {'pool_code' : poolcode, 'startnum' : $scope.typecard.startnum ,'endnum' : $scope.typecard.endnum, 'card_status':$scope.typecard.card_status, 'card_giveout_target' :  $scope.typecard.card_giveout_target};
		listinpool.save(cardparem, function(res){
			//console.log($scope.typecard);
			    if (res.errcode !== 0) {
                   alert(res.errmsg);   
			    } else {
			    	$scope.cardlists = res.data;
			    }
     	});        
	};


};
