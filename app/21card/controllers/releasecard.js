module.exports = function($scope,  $stateParams, releasecard){


	

    var poolcode = $stateParams.poolcode;

    $scope.cardinfo = {
    	'status' : '2',
    	'cardnum' : '',
    	'startnum' : '',
    	'endnum' : ''

    };

	$scope.resivecard = function(){
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
	};

};