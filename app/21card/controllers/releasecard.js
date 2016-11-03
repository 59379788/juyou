module.exports = function($scope,  $stateParams, getcardlist, cardinpool, statename, listinpool, targetcard,ITEMS_PERPAGE){
   var poolcode = $stateParams.poolcode;
    $scope.typecard = {
    	'pool_code' : poolcode,
        'startnum' : '',
        'endnum' : '',
        'card_status' : '',
        'card_giveout_target' : ''
    };
    $scope.infos = [];
     /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.cardinpool = { 
    	'pool_code' : poolcode
    };
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
		var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        para = angular.extend($scope.cardinpool, para);
    	getcardlist.save(para, function(res){	
			    if (res.errcode !== 0) {
                    alert(res.errmsg);
			    } else {
			    	$scope.cardinfos = res.data;
			    	console.log(res);
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
		if (($scope.typecard.startnum !== '' && $scope.typecard.endnum === '') || ($scope.typecard.startnum === '' && $scope.typecard.endnum !== '') ) { 
			alert('卡号输入不完全');			
		} else if ($scope.typecard.endnum < $scope.typecard.startnum) { 
			alert('结束卡号不能小于起始卡号');
		}else {
            var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
            };
            para = angular.extend($scope.typecard, para);
		    //var cardparem = {'pool_code' : poolcode, 'startnum' : $scope.typecard.startnum ,'endnum' : $scope.typecard.endnum, 'card_status':$scope.typecard.card_status, 'card_giveout_target' :  $scope.typecard.card_giveout_target};
		    listinpool.save(para, function(res){
			console.log(para);
			    if (res.errcode !== 0) {
                   alert(res.errmsg);   
			    } else {
			    	$scope.cardlists = res.data;
			    	console.log($scope.cardlists);
			    }
     	    }); 
     	}       
	};


};
