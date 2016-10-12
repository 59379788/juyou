module.exports = function($scope, $stateParams, batchnumber){
 $scope.cardinfo = { 
 	'cardnum' : '',
 	'startcard' : '',
 	'endcard' : '',
 	'cardstatu' : '0'
 };

 $scope.setbatch = function(){ 
 	var cardparem = {'cardstatu':$scope.cardinfo.cardstatu};
 	if ($scope.cardinfo.cardstatu === '0') {
        	cardparem['cardnum'] = $scope.cardinfo.cardnum;
        } else if ($scope.cardinfo.cardstatu === '1'){
        	cardparem['startcard'] = $scope.cardinfo.startcard;
        	cardparem['endcard'] = $scope.cardinfo.endcard;
        } else {
        	alert('参数错误');
        }

        console.log(cardparem);
 	batchnumber.save(cardparem, function(res){
			console.log(res);
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	alert('批次号设置成功');
			    	return;
			    }
    });     
 };

};