module.exports = function($scope, $state, $stateParams, addcard, unusedcard){
    var poolcode = $stateParams.poolcode;
    $scope.cardinfo = {
    	'type' : '',
    	'cardnum' : '',
    	'startnum' : '',
    	'endnum' : ''
    };

    $scope.getunusedcard = function(){ 
        unusedcard.save({}, function(res){ 
    	    if (res.errcode !== 0) { 
    		    alert(res.errmsg);
    	    } else { 
    		    $scope.cardinfos = res.data;
    	    }
        });
    };
    $scope.getunusedcard();

	$scope.addcardbtn = function(){
        var array = [];
		// 声明一个要传的参数变量
		var cardparem = {'pool_code' : poolcode,'type':$scope.cardinfo.type};
		// 根据type类型不同参数的属性是不同的
        if ($scope.cardinfo.type === '2') {
        	cardparem['cardnum'] = $scope.cardinfo.cardnum;
        	array.push(cardparem);
        } else if ($scope.cardinfo.type === '1'){
        	cardparem['startnum'] = $scope.cardinfo.startnum;
        	cardparem['endnum'] = $scope.cardinfo.endnum;
        	array.push(cardparem);
        } 
        	for (var i = 0; i < $scope.cardinfos.length; i++) {
        	    var tmp = $scope.cardinfos[i];
                if (tmp.value == 1) { 
                    var arrayObj = { 
               	        'pool_code' : poolcode,
               	        'type' : '1',
              	        'startnum' : tmp.mincard,
              	        'endnum' : tmp.maxcard
                    };
                    array.push(arrayObj);	
                }
            };
        

        if (array.length === 0) { 
        	alert('卡号为空');
        	return;
        }
		addcard.save({'list':array}, function(res){
			console.log({'list':array});
			    if (res.errcode !== 0) {
                    alert(res.errmsg);
			    } else {
			    	alert('添加卡成功');
			    	$state.go('app.cardpool');
			    }
			    
     	});  
	    	
	};

};