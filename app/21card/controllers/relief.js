module.exports = function($scope, $state, $stateParams, releasecard, canrelease){
   var poolcode = $stateParams.poolcode;
    
    console.log(poolcode);
    $scope.canreleasecard = function(){ 
    	canrelease.save({'pool_code' : poolcode}, function(res){ 
    		if (res.errcode !== 0) { 
    			alert(res.errmsg);
    		} else { 
    			$scope.releasecardinfo = res.data;
    			//console.log(res);
    		}
    	});
    };
    $scope.canreleasecard();

    $scope.cardinfo = { 
       'status' : '',
       'cardnum' : '',
       'startnum' : '',
       'endnum' : ''

    };
	$scope.resivecard = function(){
		console.log($scope.cardinfo.status);
		var array = [];
		var cardparem = {'pool_code' : poolcode,'status':$scope.cardinfo.status};
        if ($scope.cardinfo.status === '1') {
        	array.push(cardparem);
        } else if ($scope.cardinfo.status === '2'){
        	cardparem['cardnum'] = $scope.cardinfo.cardnum;
        	array.push(cardparem);
        } else if ($scope.cardinfo.status === '3'){
        	cardparem['startnum'] = $scope.cardinfo.startnum;
        	cardparem['endnum'] = $scope.cardinfo.endnum;
        	array.push(cardparem);
        } else {
        	//alert('参数错误');
        	for (var i = 0; i < $scope.releasecardinfo.length; i++) {
        	var tmp = $scope.releasecardinfo[i];
        	//console.log(tmp);
        	 //属性选择
            
            if (tmp.value == 1) { 
               var arrayObj = { 
              	'pool_code' : poolcode,
               	'type' : '3',
              	'startnum' : tmp.mincard,
              	'endnum' : tmp.maxcard
              };
              array.push(arrayObj);	
            }
           };

        }

       // console.log(cardparem); 	
		releasecard.save({'list' : array}, function(res){
			console.log({'list' : array});
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                 //  return;
			    } else {
			    	alert('释放成功');
                    $state.go('app.cardpool');
			    //	return;
			    }
     	});                
	};

	// 复选框
	/*$scope.checkcardinfo = function(){
		var array = [];
        for (var i = 0; i < $scope.releasecardinfo.length; i++) {
        	var tmp = $scope.releasecardinfo[i];
        	//console.log(tmp);
        	 //属性选择
            
            if (tmp.value == 1) { 
               var arrayObj = { 
              	'mincard' : tmp.mincard,
              	'maxcard' : tmp.maxcard
              };
              array.push(arrayObj);	
            }
        };
        console.log(array);
	};*/

	


};