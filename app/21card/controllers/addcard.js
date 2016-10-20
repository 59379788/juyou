module.exports = function($scope, $state, $stateParams, addcard, unusedcard){


    var poolcode = $stateParams.poolcode;
    console.log(poolcode);
    $scope.cardinfo = {
    	'type' : '2',
    	'cardnum' : '',
    	'startnum' : '',
    	'endnum' : ''

    };

    $scope.getunusedcard = function(){ 
     unusedcard.save({}, function(res){ 
    	if (res.errcode !== 0) { 
    		alert(res.errmsg);
    	} else { 
    		console.log(res);
    		$scope.cardinfos = res.data;
    		console.log($scope.cardinfos);
    	}
     });
    };
    $scope.getunusedcard();

    

	$scope.addcard = function(){
		//$state.go('app.cardpoollist'); 
		console.log($scope.cardinfo.type);
		// 声明一个要传的参数变量
		var cardparem = {'pool_code' : poolcode,'type':$scope.cardinfo.type};
		// 根据type类型不同参数的属性是不同的
        if ($scope.cardinfo.type === '2') {
        	cardparem['cardnum'] = $scope.cardinfo.cardnum;
        } else if ($scope.cardinfo.type === '1'){
        	cardparem['startnum'] = $scope.cardinfo.startnum;
        	cardparem['endnum'] = $scope.cardinfo.endnum;
        } else {
        	alert('参数错误');
        }

        console.log(cardparem);
		//return;

		addcard.save(cardparem, function(res){
			console.log(res);
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	alert('添加卡成功');
			    	$state.go('app.basecardlist');
			    	return;

			    }
			    
     	});  
        // 调回到原页面
		
	};

};