module.exports = function($scope, $state, $stateParams){
	var pimg = $stateParams.pimg;
    console.log(pimg);
    $scope.info = {
        'picture' : ''
    }
    $scope.info.picture = pimg;
    $scope.info.picture = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491989791995&di=88a2aec9ab857a50e3ca22a120a5f0e2&imgtype=0&src=http%3A%2F%2Fs9.knowsky.com%2Fbizhi%2Fl%2F15001-25000%2F200952924534118315756.jpg"
			


};