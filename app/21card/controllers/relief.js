module.exports = function($scope, $state, $stateParams,  $uibModalInstance,poolcode, releasecard, canrelease){
    $scope.canreleasecard = function(){ 
    	canrelease.save({'pool_code' : poolcode}, function(res){ 
    		if (res.errcode !== 0) { 
    			alert(res.errmsg);
    		} else { 
    			$scope.releasecardinfo = res.data;
    			console.log($scope.releasecardinfo);
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

    $scope.ok = function () {
        //console.log($scope.obj);
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
        } 
        	for (var i = 0; i < $scope.releasecardinfo.length; i++) {
        	    var tmp = $scope.releasecardinfo[i];
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
        

       // console.log(cardparem);
        if (array.length === 0) { 
        	alert('卡号不能为空!');
        	return;
        } 	
		releasecard.save({'list' : array}, function(res){
			console.log({'list' : array});
			    if (res.errcode !== 0) {
                    alert(res.errmsg);
			    } else {
			    	alert('释放成功');
			    	$uibModalInstance.close();
                   // $state.go('app.cardpool');
			    }
     	});                
	};  
    

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

};