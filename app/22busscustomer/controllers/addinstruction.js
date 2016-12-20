module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,saveExplain,updateExplain,getAdminExplain){ 
    var id = $stateParams.id;
    var title_identifier = $stateParams.title_identifier;

    $scope.saveinfo = {
        'title_identifier' : '',
        'title' : '',
        'explain_content' : ''
    };
    if (id) {
        getAdminExplain.save({'id' : id}, function(res){
            if (res.errcode !== 0) {
                    alert(res.errmsg);
                    return;
                }
                console.log(res);
                $scope.saveinfo = res.data;

        });
    }

    if (title_identifier) {
        $scope.title_identifier = title_identifier;
    }

    
    
    $scope.saveinstruction = function(){
        if (id) {
            // 修改
            var para = {
                id : id
            };
            para = angular.extend($scope.saveinfo, para);
            if ($scope.saveinfo.title_identifier!==''&&$scope.saveinfo.title!==''&&$scope.saveinfo.explain_content!=='') {
                updateExplain.save(para, function(res){
                console.log(para);
                if (res.errcode !== 0) {
                    alert(res.errmsg);
                    return;
                }
                console.log(res);
                alert('修改成功');
                $state.go('app.instructionlist');
                });
            } else {
                alert('信息填写不完全！');
            }
            
        } else {
            alert('添加说明');
            if ($scope.saveinfo.title_identifier!==''&&$scope.saveinfo.title!==''&&$scope.saveinfo.explain_content!=='') {
                saveExplain.save($scope.saveinfo, function(res){
                console.log($scope.saveinfo);
                if (res.errcode !== 0) {
                    alert(res.errmsg);
                    return;
                }
                console.log(res);
                alert('添加成功');
                $state.go('app.instructionlist');
                });
            } else {
                alert('信息填写不完全！');
        }
            
        }
        
    };
   
};