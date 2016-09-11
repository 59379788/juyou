module.exports = function($scope, $state, shakedevicelist, shakedevicedel){

    $scope.searchform = {};
    $scope.searchform.binding_type = '';

    function _info(){
        console.log($scope.searchform);
        shakedevicelist.save($scope.searchform, function(res){
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
        $state.go('app.shakedevice');
    }

    $scope.edit = function(id)
    {
        $state.go('app.shakedevice', {'id' : id});
    }

    $scope.del = function(id)
    {
        if(!confirm("确定要删除数据吗？")){
            return;
        }
        shakedevicedel.get({'id' : id}, function(res){
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