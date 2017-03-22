module.exports = function($scope, $state, $stateParams,  $uibModalInstance,poolcode, releasecard, canrelease,ITEMS_PERPAGE){
    $scope.poolcodeinfo = { 
    	'pool_code' : poolcode
    };
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 5;         //每页显示几条

    $scope.canreleasecard = function(){ 
    	var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        para = angular.extend($scope.poolcodeinfo, para);
    	canrelease.save(para, function(res){
    	    console.log(para); 
    		if (res.errcode !== 0) { 
    			alert(res.errmsg);
    		} else { 
    			$scope.releasecardinfo = res.data.results;
    			 $scope.bigTotalItems = res.data.totalRecord;
    			console.log(res);
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
		var cardparem = {'status':$scope.cardinfo.status};
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
               	       'status' : '3',
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
        var para = {'poolcode' : poolcode};
        para['list'] = array;
        console.log(para);
        
		releasecard.save(para, function(res){
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