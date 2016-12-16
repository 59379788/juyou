module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,savegood){  
    $scope.info = {
        'goods_id' : ''
    };
	$scope.savegoodforyou = function() {
        savegood.save($scope.info,function(res){
            console.log($scope.info);
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            alert('添加成功');
        });
    };

};