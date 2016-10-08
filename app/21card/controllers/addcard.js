module.exports = function($scope, $stateParams, addcard){


var poolcode = $stateParams.poolcode;
console.log(poolcode);
    $scope.cardinfo = {
    	'type' : '2',
    	'cardnum' : '',
    	'startnum' : '',
    	'endnum' : ''

    };
	$scope.addcard = function(){
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
			    	return;
			    }
     	});                
	};

};