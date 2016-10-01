module.exports = function($scope, $stateParams, releasecard){
 $scope.cardinfo = { 
		'status' : '0',
		'cardnum' : '',
        'startnum' : '',
        'endnum' : ''
	};
 $scope.setunissued = function(){ 
 	var cardparem = {'pool_code' : '', 'type':$scope.cardinfo.status};
		// 根据type类型不同参数的属性是不同的
        if ($scope.cardinfo.status === '0') {
        	cardparem['cardnum'] = $scope.cardinfo.cardnum;
        } else if ($scope.cardinfo.status === '1'){
        	cardparem['startnum'] = $scope.cardinfo.startnum;
        	cardparem['endnum'] = $scope.cardinfo.endnum;
        } else {
        	alert('参数错误');
        }

        console.log(cardparem);
 };

 


};