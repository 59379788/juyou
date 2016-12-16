module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,saveExplain){ 
    var id = $stateParams.id;
    alert(id);
    if (id) {
        alert('获取该条说明显示到页面');
    } else {
        alert('添加说明');
    }
    $scope.saveinfo = {
        'title_identifier' : '',
        'title' : '',
        'explain_content' : ''
    };

    $scope.saveinstruction = function(){
        alert('dkafjkajf');
        saveExplain.save($scope.saveinfo, function(res){
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
        });
    };
   
};