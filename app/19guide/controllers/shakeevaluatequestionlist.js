module.exports = function($scope, $state, shakeevaluatequestionlist, shakeevaluatequestiondel){

    $scope.searchform = {};
    $scope.searchform.category = '';

    function _info(){
        console.log($scope.searchform);
        shakeevaluatequestionlist.save($scope.searchform, function(res){
            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }
            $scope.objs = res.data;
        });
    }
    _info();

    $scope.search = function()
    {
        _info();
    }

    $scope.create = function()
    {
        $state.go('app.shakeevaluatequestion');
    }

    $scope.edit = function(id)
    {
        $state.go('app.shakeevaluatequestion', {'id' : id});
    }

    $scope.del = function(id)
    {
        if(!confirm("确定要删除数据吗？")){
            return;
        }
        shakeevaluatequestiondel.get({'id' : id}, function(res){
            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }
            alert('删除成功');
            _info();
        });
    }
};